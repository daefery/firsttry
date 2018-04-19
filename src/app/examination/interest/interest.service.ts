import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterestService {
	constructor(private http: HttpClient) { }

    getSection(): Observable<any> {
        return this.http.get('assets/data/sections.json').map(res=>res as any);
    }

    save(data, sectionId):Observable<any>{
        let resultDetails = [];
        data.forEach(res => {
            for (let prop in res) {
                let originalProp = prop;
                if(prop.search('kem') == 0){
                    prop = prop.replace('kem-', '');
                }
                let p = 
                {
                    "questionId": prop,
                    "answerId": res[originalProp]
                }
                resultDetails.push(p);
            }            
        });
        let store = 
        {
            "result": {
                "accountId": localStorage.getItem('accountId'),
                "sectionId": sectionId,
                "resultDetails": resultDetails
            }
        };
       return this.http.post('secret', store).map(res => res as any[] || []);
    }

    getSectionIntro(id){
        let intro;
        switch (id) {
            case 1:
                intro=`
                <h4>INSTRUKSI BAGIAN I :</h4>
                <p class="flow-text">
                        Pada bagian ini saudara akan menemukan daftar aktivitas yang telah saudara
                        temui atau yang akan saudara temui di masa yang akan datang. Bacalah setiap
                        aktivitas dengan teliti dan berilah dua penilaian terhadap setiap aktivitas yang
                        diberikan pada tempat yang telah disediakan.
                </p><br>
                <p class="flow-text">
                        Pertama berilah penilaian seberapa suka saudara pada aktivitas tersebut. Kedua
                        berilah penilaian mengenai kemampuan/kompetensi saudara untuk
                        mengerjakan aktivitas tersebut. Berilah skala antara 1 (satu) sampai dengan 7
                        (tujuh) untuk kesukaan dan kompetensi sesuai dengan keterangan dibawah ini.
                </p><br><br>
                <img src="assets/images/exam/interest/intro.jpg" class="responsive-image">
                
                <br><br>
                <br><br>
                <p class="flow-text">
                        Contoh : 1. Membuat Puisi
                </p>
                <p class="flow-text">
                    Pada soal contoh tersebut, pertama jika saudara sangat menyukai aktivitas
                    tersebut maka pada lembar jawaban tulis angka 7, Kedua jika saudara merasa
                    tidak mampu melakukannya maka pada lembar jawaban tulis angka 2.
                    Pada lembar jawaban :
                </p>
                <img src="assets/images/exam/interest/intro.jpg" class="responsive-image">                
                <br>
                <br>
                <br>
                <br>
                <p class="flow-text">
                    Apabila anda sudah mengerti dengan cara pengerjaan dari intruksi di atas, harap menekan tombol <b>"MULAI"</b> untuk melakukan tes.
                </p>
                `;
                break;
            default:
                intro=`
                <h4>INSTRUKSI BAGIAN II :</h4>
                <p class="flow-text">
                        Pada bagian ini saudara akan menemukan berbagai jenis pekerjaan. Untuk setiap
                        pekerjaan berikanlah penilaian antara 1 (sangat tidak menyukainya) sampai
                        dengan 7 (sangat menyukainya) untuk menggambarkan perasaan saudara
                        terhadap pekerjaan yang disajikan.
                </p><br>
                <p class="flow-text">
                    Saudara tidak perlu merasa khawatir mengenai baik tidaknya pekerjaan tersebut
                    ataupun kemampuan saudara dalam melakukan pekerjaan tersebut. Saudara
                    hanya berpikir seberapa suka terhadap setiap pekerjaan yang disajikan.
                    Berikanlah penilaian pada tempat yang telah disediakan sesuai skala penilaian
                    dibawah ini
                </p><br><br>
                <img src="assets/images/exam/interest/intro1.jpg" class="responsive-image">
                
                <br><br>
                <br><br>
                <p class="flow-text">
                    Cara menjawab pada lembar jawaban sama seperti pada bagian I. Hanya saja
                    pada bagian II ini, saudara hanya menjawab penilaian terhadap kesukaanya saja
                    dan tidak ada penilaian terhadap kemampuan.
                </p>
                <br>
                <br>
                <br>
                <p class="flow-text">
                    Apabila anda sudah mengerti dengan cara pengerjaan dari intruksi di atas, harap menekan tombol <b>"MULAI"</b> untuk melakukan tes.
                </p>
                `;
                break;
        }
        return intro;
    }
}