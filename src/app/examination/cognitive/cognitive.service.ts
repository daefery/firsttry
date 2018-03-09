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
                    "timeDuration": 10,
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
                    "timeDuration": 5,
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
                
            ]
        }
    }

    /*getFormData(){
    	return 
    }*/
}