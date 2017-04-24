import {Muncher,Cruncher} from 'dmaser/muncher/utils';
Muncher=use(Muncher.Core);
Muncher.init(toStandardEfix);

export default class ExecuteMuncher extends Muncher{
    constructor(props,events,mnc){
        super(props,events);
        let params={
            prop:this.import(all).Muncher(),
            mnc:mnc,
            ev:events.toString()
        }
    }

    version = {
        check(){
            let ver = Muncher.returnVersionString(this.params.prop['version']);
            if (ver < Muncher.Core.v) {
                Muncher.exec.update(this.params.mnc);
                get(Muncher.Core.v+'/latest/build').then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        get(url,method='GET',...timeout) {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                request.open(method, url);

                request.onload = () => {
                    if (request.status === 200) {
                        resolve(request.response);
                    } else {
                        reject(Error(request.statusText));
                    }
                };

                request.onerror = () => {
                    reject(Error('Network Error'));
                };

                request.send();
            });
        }
    };

    static init(){
        let loader = new Loader({
            global:fixup(window)
        });
        this.version.check().then(function(){
            loader.eval(Muncher.Core.run()).then(function(){
                Mucher.Core._render();
            })
        })
    }
}