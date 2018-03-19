import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterestService {
	constructor(private http: HttpClient) { }

    // getSection(): Observable<any> {
    //     return this.http.get('http://dbfaxtorcoid-via.cloud.revoluz.io:49894/api/Sections').map(res=>res as any);
    // }

    /*getFormData(){
    	return 
    }*/
    getSection(){
        return {
            "sections":[
                {
                    "sectionId": "dfsdgsdgs-10d5-sdgsdgsdgs-9ad7-sdgsdg",
                    "name": "Interest",
                    "hasGenericAnswer": false,
                    "description": "Ocean Description",
                    "timeDuration": 1,
                    "answer": [],
                    "questions": [
                        {
                            "questionId": "dfdf-sdgsdg-416e-dfdf-sdgsdg",
                            "name": "Dimana Rumahmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-dfdfdf-sdg-c88d-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-dddds-c089-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "asdasf-ssss-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-dfdfg-c089-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-ggdfdf-c089-dfdfd-sdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrrfr-c089-sdfsdfsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "fgfgfgf-dgrrfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sdfsdf-sdgsdg-416e-sdfsdfsdf-sdgsdg",
                            "name": "Dimana Namamu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-dfdfdf-sdg-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-dddds-sdfsdfsdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "asdasf-fsdfsdfsdfs-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-sdfsdfsdfs-c089-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-ggdfdf-c089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrrfr-c089-sdfssdfsdfsdfsdfdfsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "fgfgfgf-dgrrsdfsdfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sdfasdasdasdasdsdf-sdgsdg-416e-sdfsdfsdf-sdgsdg",
                            "name": "Dimana Mamamu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-dfdfdf-sasdasdasdasdadg-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-dddds-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "asdasdasdasdasdf-fssdasdasdfsdfsdfs-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-sdfasdasdassdfsdfs-c089-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-ggddasdasdasdfdf-casdasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrrfr-c089-sdfssdasdasdasdafsdfsdfsdfdfsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "fgfgsdasdasdfgf-dgrrsdfsdfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sdfdff-sdgsdg-416e-sdfsdfsdf-sdgsdg",
                            "name": "Dimana Bapakmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-dfdfdf-dfdfdfdfd-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-ddddfdfdfdfds-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "asdasdasfdfdfdfdfdfdasdasdf-fssdasdasdfsdfsdfs-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-sdfasdasdassdfsdfs-c0dfdfdfd89-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-ggddasdasdasdffdfdfddf-casdasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrrfr-c08dfdfdf9-sdfssdasdasdasdafsdfsdfsdfdfsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "fgfgsdasdasddfdffgf-dgrrsdfsdfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsdf-sdgsdg-416e-dfsdfds-sdgsdg",
                            "name": "Dimana Nenekmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-dfdfdf-sdfsdf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-sdfsdfsdf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sdfsdfsd-sdfsdfs-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-sdfsdfsdf-c0dfdfdfd89-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-sdfsdfsdf-casdasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrrfr-c08dfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfsdfsd-dgrrsdfsdfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsdf-sdgsdg-416e-dfsdfds-asfasfsfsffasf",
                            "name": "Dimana Kakekmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-asfasfsf-asfasf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-sfsfsfsf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sdfsdfsd-sfsfsfs-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-fsfsfsfsfs-c0dfdfdfd89-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-sdfssfsfsdfsdf-casdfsfsfasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrfsfsfsrfr-c08dffsfsfsfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfsdfsd-dgrrsdfsdfsfsfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsdf-sdgssssdsdsdsdg-416e-dfsdfds-asfasfasf",
                            "name": "Dimana Adikmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-asfassfsfsfssfsf-asfasf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-sfsfsfsfsfsfsf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sdfsdffsfsfsfsd-sfsfsfs-sasda-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-fsfsfsfsfs-c0dfsfsfsfsdfdfd89-aasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-sdfssfsfsdfsdf-casdffsfsfsfsfsfsfsfasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrfsfssfsfsffsrfr-c08dffsfsfsfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfsdfsd-dgsfsfsrrsdfsdfsfsfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsdf-sdfsdfsdf-416e-dfsdfds-asfasfasf",
                            "name": "Dimana Adikmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-asfassfsfasdasdsfssfsf-asfasdasdasdaf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhyy-sfasdasdsfsfsfsfsfsf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sdfsdffsfsfsfsd-sfsfsfs-sasasdasdasdada-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sd-fsfsfsfsfs-c0dfsfsfsfsdfdfd89-aasdasdasdasdasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdf-sdfssfsfsdfsdf-casdffsdasdasdasfsfsfsfsfsfsfasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfdf-dgrfsfssfsfssdasdasdasdffsrfr-c08dffsfsfsfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfsdfsd-dgsasdasfsfsrrsdfsdfsfsfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsasdasddf-sdfsdfsdf-41asdasdad6e-dfsdfds-asfasfasf",
                            "name": "Dimana Pamanmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfsdasdasdd-asfassasdasdafsfasdasdsfssfsf-asfasdasdasdaf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhasdasdasyy-sfasdasdsfsfsfsfsfsf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sddasdasdfsdffsfsfsfsd-sfsfsfs-sasasdasdasdada-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sasdasdasdd-fsfsfsfsfs-c0dfsfsfsfsdfdfd89-aasdasdasdasdasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdasdasdasdf-sdfssfsfsdfsdf-casdffsdasdasdasfsfsfsfsfsfsfasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfasdasdasddf-dgrfsfssfsfssdasdasdasdffsrfr-c08dffsfsfsfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfasdassdfsd-dgsasdasfsfsrrsdfsdfsfsfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsasdasddf-sdfsdsdssdfsdf-41asdasdad6e-dfsdfsdsdsds-asfasfasf",
                            "name": "Dimana Bibimu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfsdasdasdd-sdsds-asfasdasdasdaf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhasdassdsdsdasyy-sfasdasdsfsfsfsfsfsf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sddasdasddsdsdfsdffsfsfsfsd-sfsfsfs-sasasdasdasdada-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sasdasdasdd-fsfsdsdsdssfsfsfs-c0dfsfsfsfsdfdfd89-aasdasdasdasdasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdasdasdasdf-sdfdsdsdsdssfsfsdfsdf-casdffsdasdasdasfsfsfsfsfsfsfasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfasdasdasddf-dgsdsdsdsrfsfssfsfssdasdasdasdffsrfr-c08dffsfsfsfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfasdassdfsd-dgsadsdsdsdasfsfsrrsdfsdfsfsfsdfr-c089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        },
                        {
                            "questionId": "sfsasdasddf-asfasfasfas-41asdasdad6e-dfsdfsdsdsds-asfasfasf",
                            "name": "Dimana Sepupumu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfsdasdasdd-fasfasfasfasdsds-asfasdasdasdaf-sdfsdf-dfdfd",
                                    "name": "1"
                                },
                                {
                                    "answerId": "dfhasdassdsdsdasyy-sfsfasfasfasdasdsfsfsfsfsfsf-sdfsdfsdasdasdasdf-5db8-dfdfd",
                                    "name": "2"
                                },
                                {
                                    "answerId": "sddasdasddsdsdfsdasfasfasfaffsfsfsfsd-sfsfsfs-sasasdasdasdada-dfdfdf-ssdfdf",
                                    "name": "3"
                                },
                                {
                                    "answerId": "sasdasdassfasfasfasfdd-fsfsdsdsdssfsfsfs-c0dfsfsfsfsdfdfd89-aasdasdasdasdasfdddg-5a66dsdweb5f",
                                    "name": "4"
                                },
                                {
                                    "answerId": "dfdasdasasfasfasdasdf-sdfdsdsdsdssfsfsdfsdf-casdffsdasdasdasfsfsfsfsfsfsfasd089-dfdfd-sdfdfsdfsdfsdfsdf",
                                    "name": "5"
                                },
                                {
                                    "answerId": "dfasdasasfasfdasddf-dgsdsdsdsrfsfssfsfssdasdasdasdffsrfr-c08dffsfsfsfdfdf9-dfsdsdsdf-3bceb5f",
                                    "name": "6"
                                },
                                {
                                    "answerId": "sdfasdassdasfasffsd-dgsadsdsdsdasfsfsrrsdfsdfsfsfsdfr-casfas089-dfdfd-3bceb5f",
                                    "name": "7"
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    }
}