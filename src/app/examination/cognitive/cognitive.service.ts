import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CognitiveService {
	constructor(private http: HttpClient) { }

    // getSection(): Observable<any> {
    //     return this.http.get('http://dbfaxtorcoid-via.cloud.revoluz.io:49894/api/Sections').map(res => res as any);
    // }

    getSection(){
        return {
            "sections": [
                {
                    "sectionId": "0235251c-10d5-4a7a-9ad7-cea81bc4b3d8",
                    "name": "Numeric 1",
                    "hasGenericAnswer": false,
                    "description": "Ocean Description",
                    "timeDuration": 1,
                    "answer": [],
                    "questions": [
                        {
                            "questionId": "7ba20629-0627-4a26-a07b-1ac6dcc3dda3",
                            "name": "Siapa Nama Kamu.",
                            "type":"image",
                            "grade": 1,
                            "answers": [
                                {
                                    "answerId": "08d584ad-f004-4a3d-c88d-9d26265a3067",
                                    "name": "assets/images/cards/sample-1.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-c089-5db8-5a6633bceb5f",
                                    "name": "assets/images/cards/sample-1.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-4a3d-c88d-9d2dfdga3067",
                                    "name": "assets/images/cards/sample-1.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-c089-5db8-5a66dsdweb5f",
                                    "name": "assets/images/cards/sample-1.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-c089-5db8wer3-3bceb5f",
                                    "name": "assets/images/cards/sample-1.jpg"
                                }
                            ]
                        },
                        {
                            "questionId": "adsfsdf-0627-4a26-a07bsdfsdf-1ac6dcc3dda3",
                            "name": "assets/images/exam/contoh-soal.jpg",
                            "type":"fullimage",
                            "grade": 1,
                            "answers": [
                                {
                                    "answerId": "sdfsdfsdf-f00sdfsdfsdfsdf4-4a3d-c88sdfsdfsdfsd-9d26265a3067",
                                    "name": "assets/images/exam/ans-1.jpg"
                                },
                                {
                                    "answerId": "08d5sfdfsdf84ad-f004-c089-5db8-5sdfsdfsdfsdfa6633bceb5f",
                                    "name": "assets/images/exam/ans-2.jpg"
                                },
                                {
                                    "answerId": "08d584ad-fsdfsdfsd004-4a3d-c88d-9d2dfdga3067",
                                    "name": "assets/images/exam/ans-3.jpg"
                                },
                                {
                                    "answerId": "08d58fsdfsdfsd4ad-f004-c089-5fsdfsdfsdfdb8-5a66dsdweb5f",
                                    "name": "assets/images/exam/ans-4.jpg"
                                },
                                {
                                    "answerId": "08d584adsdfsdfsd-f004-cfsdfsd089-5db8wer3-3bceb5f",
                                    "name": "assets/images/exam/ans-5.jpg"
                                }
                            ]
                        },
                        {
                            "questionId": "sdfsdfsdf-0627-4a26-sdsdgsdgsdgsd-1ac6dcc3dda3",
                            "name": "assets/images/exam/contoh-soal-2.jpg",
                            "type":"fullimage",
                            "grade": 1,
                            "answers": [
                                {
                                    "answerId": "sdfsdfsdf-fsdfsdfsd-4a3d-c88sdfsdfsdfsd-sdfsdfsdfs",
                                    "name": "assets/images/exam/ans2-1.jpg"
                                },
                                {
                                    "answerId": "dfsdfsdfsdf-f004-c089-5db8-5sdfsdfsdfsdfa6633bceb5f",
                                    "name": "assets/images/exam/ans2-2.jpg"
                                },
                                {
                                    "answerId": "sdfsdfsdfsdfs-fsdfsdfsd004-4a3d-c88d-9d2dfdga3067",
                                    "name": "assets/images/exam/ans2-3.jpg"
                                },
                                {
                                    "answerId": "sdfsdfsdfsdfsd-f004-c089-5fsdfsdfsdfdb8-5a66dsdweb5f",
                                    "name": "assets/images/exam/ans2-4.jpg"
                                },
                                {
                                    "answerId": "sdfsdfsdfsdf-f004-cfsdfsd089-5db8wer3-3bceb5f",
                                    "name": "assets/images/exam/ans2-5.jpg"
                                }
                            ]
                        },
                        {
                            "questionId": "f0427559-f702-416e-9023-7d67ec71a626",
                            "name": "Dimana Rumahmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-f004-fgfhfh-c88d-9d26265a3067",
                                    "name": "Answer 1"
                                },
                                {
                                    "answerId": "dfhyy-f004-c089-5db8-fggggdgdg",
                                    "name": "Answer 2"
                                },
                                {
                                    "answerId": "08d584ad-f004-4a3d-fffffssd-9d2dfdga3067",
                                    "name": "Answer 3"
                                },
                                {
                                    "answerId": "08d584ad-f004-c089-aasfdddg-5a66dsdweb5f",
                                    "name": "Answer 4"
                                },
                                {
                                    "answerId": "08d584ad-dgrrfr-c089-5db8wer3-3bceb5f",
                                    "name": "Answer 5"
                                }
                            ]
                        }
                    ]
                },
                {
                    "sectionId": "sfdfsdfsd-10d5-4a7a-9ad7-cea81bc4b3d8",
                    "name": "Logika Dasar",
                    "hasGenericAnswer": false,
                    "description": "Ocean Description",
                    "timeDuration": 1,
                    "answer": [],
                    "questions": [
                        {
                            "questionId": "2545454-0627-4a26-a07b-1ac6dcc3dda3",
                            "name": "Siapa Nama Kamu.",
                            "type":"image",
                            "grade": 1,
                            "answers": [
                                {
                                    "answerId": "08d584ad-f004-4a3d-dfgdfgsd-9d26265a3067",
                                    "name": "assets/images/assessments/Creative Expression.jpg"
                                },
                                {
                                    "answerId": "dfdfd-f004-c089-5db8-5a6633bceb5f",
                                    "name": "assets/images/assessments/Creative Expression.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-4a3d-c88d-dsgsdgsdg",
                                    "name": "assets/images/assessments/Creative Expression.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-dfdfsdfsd-5db8-5a66dsdweb5f",
                                    "name": "assets/images/assessments/Creative Expression.jpg"
                                },
                                {
                                    "answerId": "08d584ad-dfdfdf-c089-5db8wer3-3bceb5f",
                                    "name": "assets/images/assessments/Creative Expression.jpg"
                                }
                            ]
                        },
                        {
                            "questionId": "asfasfasf-f702-416e-9023-7d67ec71a626",
                            "name": "Dimana Rumahmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-f004-fgfhfh-c88d-32323dsad",
                                    "name": "Answer 6"
                                },
                                {
                                    "answerId": "dfhyy-yusdfs-c089-5db8-fggggdgdg",
                                    "name": "Answer 7"
                                },
                                {
                                    "answerId": "asdasf-f004-sasda-fffffssd-9d2dfdga3067",
                                    "name": "Answer 8"
                                },
                                {
                                    "answerId": "08d584ad-scasad-c089-aasfdddg-5a66dsdweb5f",
                                    "name": "Answer 9"
                                },
                                {
                                    "answerId": "adasda-dgrrfr-c089-wwdade-3bceb5f",
                                    "name": "Answer 10"
                                }
                            ]
                        }
                    ]
                },
                {
                    "sectionId": "sfdfsdfsd-10d5-sdfsdf4a7a-9ad7-cea81bc4b3d8",
                    "name": "Gambaran Umum",
                    "hasGenericAnswer": false,
                    "description": "Ocean Description",
                    "timeDuration": 1,
                    "answer": [],
                    "questions": [
                        {
                            "questionId": "sdfsdf-0627-4a26-a07b-1ac6dcc3dda3",
                            "name": "Siapa Nama Kamu.",
                            "type":"image",
                            "grade": 1,
                            "answers": [
                                {
                                    "answerId": "sdfsdf-sdfsdfsdf-4a3d-dfgdfgsd-9d26265a3067",
                                    "name": "assets/images/assessments/global.jpg"
                                },
                                {
                                    "answerId": "dfdfd-dgdgfg-c089-5db8-fgfgsfgsf",
                                    "name": "assets/images/assessments/global.jpg"
                                },
                                {
                                    "answerId": "08d584ad-sdf-sdsd4a3d-c88d-dsgsdgsdg",
                                    "name": "assets/images/assessments/global.jpg"
                                },
                                {
                                    "answerId": "08d584ad-f004-sdfsdf-5db8-sdfdf",
                                    "name": "assets/images/assessments/global.jpg"
                                },
                                {
                                    "answerId": "dfdf-sdfd-c089-5db8wer3-3bceb5f",
                                    "name": "assets/images/assessments/global.jpg"
                                }
                            ]
                        },
                        {
                            "questionId": "dfdf-f702-416e-dfdf-dfdfd",
                            "name": "Dimana Rumahmu.",
                            "type":"text",
                            "grade": 2,
                            "answers": [
                                {
                                    "answerId": "dfd-dfdfdf-fgfhfh-c88d-dfdfd",
                                    "name": "Answer 11"
                                },
                                {
                                    "answerId": "dfhyy-yusdfs-c089-5db8-dfdfd",
                                    "name": "Answer 12"
                                },
                                {
                                    "answerId": "asdasf-f004-sasda-dfdfdf-9d2dfdga3067",
                                    "name": "Answer 13"
                                },
                                {
                                    "answerId": "sd-sscasad-c089-aasfdddg-5a66dsdweb5f",
                                    "name": "Answer 14"
                                },
                                {
                                    "answerId": "dfdf-dgrrfr-c089-dfdfd-3bceb5f",
                                    "name": "Answer 15"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    /*getFormData(){
    	return 
    }*/
}