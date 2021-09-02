'use strict';

module.exports = class Dao {
    constructor(model) {
        this.model = model;
    }

    async find(params) {
        try {
            let queryData = {
                raw: true,
                where: params.query,
            };
            if (params.attributes && params.attributes.length) {
                queryData.attributes = params.attributes
            }
            if (params.limit) {
                queryData.limit = params.limit
            }
            if (params.offset) {
                queryData.offset = params.offset
            }
            if (params.order) {
                queryData.order = params.order
            }
            return await this.model.findAll(queryData) || [];
        } catch (error) {
            throw error;
        }
    }

    async findOne(query, attributes = {}, txn = undefined) {
        try {
            return await this.model.findOne({
                raw: true,
                where: query,
                attributes: attributes,
                transaction: txn
            }) || {};
        } catch (error) {
            throw error;
        }
    }

    async update(query, attributes,options = {}) {
        try {
            if (Object.keys(attributes).length == 0 || Object.keys(query).length == 0) {
                throw new Error('Update parameters missing');
            }

            return await this.model.update(attributes, Object.assign({
                where: query
            }, options));

        } catch (error) {
            throw error;
        }
    }

    async insert(attributes, options = {}) {
        try {
            return await this.model.create(attributes, options);
        } catch (error) {
            throw error;
        }
    }

    async delete(query) {
        try {
            if (Object.keys(query).length == 0) {
                throw new Error('Delete parameters missing');
            }
            return await this.model.destroy({
                where: query
            });
        } catch (error) {
            throw error;
        }
    }

    async findOrCreate(query, data = {}, txn = undefined) {
        try {
            if (Object.keys(query).length == 0 || Object.keys(data).length == 0) {
                throw new Error('FindOrCreate parameters missing');
            }
            return await this.model.findOrCreate({
                where: query,
                defaults: data,
                transaction: txn
            });
        } catch (error) {
            throw error;
        }
    }

    async updateOrCreate(query, data = {}, options ={}) {
        try {
            if (Object.keys(query).length == 0 || Object.keys(data).length == 0) {
                throw new Error('UpdateOrCreate parameters missing');
            }
            let update = 0,
                created = {};
            let user = await this.model.findOne({
                where: query
            });
            if (user) {
                [update] = await this.model.update(data, {
                    where: query
                }, options);
            } else {
                created = await this.model.create(data, options);
            }
            return { update, created };
        } catch (error) {
            throw error
        }
    }

     async bulkInsert(data){
        try{
          return await this.model.bulkCreate(data, {returning: true});
           }
           catch(error){
           throw error
           }
        }



}

