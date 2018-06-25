import * as angular from 'angular';

export class StorageService {
    static NAME: string = 'storageService';

    constructor(private $window: angular.IWindowService) {'ngInject'}

    getItem(keyName) {
        var data = this.$window.localStorage.getItem(keyName);

        try {
            return angular.fromJson(data);
        } catch (error) {
            return data;
        }
    }

    setItem(keyName, keyValue) {
        if(angular.isObject(keyValue)) {
            keyValue = angular.toJson(keyValue);
        }
        return this.$window.localStorage.setItem(keyName, keyValue);
    }

    removeItem(keyName) {
        return this.$window.localStorage.removeItem(keyName);
    }

    static factory() {
        return ($window) => {
            'ngInject';
            return new StorageService($window);
        }
    }
}

export interface IStorageService {
    getItem(keyName);
    setItem(keyName, keyValue);
    removeItem(keyName)
}