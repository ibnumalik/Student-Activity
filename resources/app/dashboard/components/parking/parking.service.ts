export class ParkingService {
    static NAME = 'ParkingService';
    private url;
    private config;

    constructor(
        private $http: ng.IHttpService,
        private $httpParamSerializerJQLike: ng.IHttpParamSerializer
    ) {
        'ngInject'

        this.url = 'http://localhost:8080/api';
        this.config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
    }

    getAll() {
        return this.$http.get(this.url+'/parking')
            .then(response => response.data);
    }

    get(id) {
        return this.$http.get(this.url+'/parking/'+id)
            .then(response => response.data);
    }

    rentSpace(data) {
        return this.$http.post(
            this.url+'/parking/status',
            this.$httpParamSerializerJQLike(data),
            this.config
        ).then(response => response.data);
    }

    static factory() {
        return ($http, $httpParamSerializerJQLike) => {
            'ngInject';
            return new ParkingService($http, $httpParamSerializerJQLike);
        }
    }

}