export class ParkingService {
    static NAME = 'ParkingService';
    private url;

    constructor(private $http: ng.IHttpService) {
        'ngInject'

        this.url = 'http://localhost:8080/api'
    }

    get() {
        return this.$http.get(this.url+'/parking')
            .then(response => response.data);
    }

    static factory() {
        return ($http) => {
            'ngInject';
            return new ParkingService($http);
        }
    }

}