export class FormOnChange implements ng.IDirective {
    static NAME: string = 'formOnChange';
    public restrict = 'A';
    public require = 'form';

    constructor(private $parse: ng.IParseService) {}

    /*
     * https://stackoverflow.com/questions/28677638/ngchange-like-functionality-for-the-entire-form
     */
    public link: ng.IDirectiveLinkFn = (scope, element, attr) => {
        var cb = this.$parse(attr.formOnChange);

        element.on('change', () => cb(scope));
    }

    static factory() {
        return ($parse) => {
            'ngInject';
            return new FormOnChange($parse);
        }
    }
}