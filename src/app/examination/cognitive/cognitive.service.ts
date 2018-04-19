import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operator/map';

@Injectable()
export class CognitiveService {
	constructor(private http: HttpClient) { }

    getSection(): Observable<any> {
        return this.http.get('assets/data/sections.json').map(res=>res as any);
    }
    save(data, sectionId):Observable<any>{
        let resultDetails = [];
        for (let prop in data) {
            let p = 
            {
                "questionId": prop,
                "answerId": data[prop]
            }
            resultDetails.push(p);
        }
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
                intro = `<p class="flow-text">Ditentukan tiga buah kata. Kata-kata tersebut memiliki kesamaan tertentu. Carilah kata
                keempat yang memiliki kesamaan dengan ketiga kata tersebut. Setiap soal terdiri dari lima
                pilihan jawaban, yaitu a, b, c, d, dan e. Carilah jawaban persoalan tersebut. Apabila jawaban
                itu sudah ditemukan, tandai jawaban soal yang bersangkutan.</p>
                <br>
                <p class="flow-text"><b>Contoh :</b></p>
                <p class="flow-text">
                    Kemeja <b>&#58;&#58;</b> Baju &nbsp;<b>:</b>&nbsp; Jaket <b>&#58;&#58;</b> <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>?
                </p>
                <p class="flow-text">
                a. Jas<br>
                b. Sarung<br>
                c. Celana<br>
                d. Busana<br>
                e. Sandang
                </p>
                <br>
                <p class="flow-text">
                Kemeja, Baju dan Jaket memiliki kesamaan yaitu sama sama pakaian atas. Dari Lima pilihan
                yang ada yang merupakan jenis pakaian adalah Jas. Maka <b>a. Jas</b> adalah ada yang benar.
                </p>
                `;
                break;
            case 2:
                intro = `
                <p class="flow-text">Test berikut ini terdiri dari soal-soal hitungan.
                Setiap soal terdiri dari lima pilihan jawaban, yaitu a, b, c, d, dan e. Carilah jawaban persoalan
                tersebut. Apabila jawaban itu sudah ditemukan, tandai jawaban soal yang bersangkutan.
                Perhatikan sekarang contoh di bawah ini.</p>
                <br>
                <p class="flow-text"><b>Contoh :</b></p>
                <p class="flow-text">
                    Seorang anak mendapatkan uang bekal Rp 10.000 per hari. Berapa jumlah uang bekal untuk 3 hari?
                </p>
                <p class="flow-text">
                a. Rp. 10.000<br>
                b. Rp. 20.000<br>
                c. Rp. 30.000<br>
                d. Rp. 40.000<br>
                e. Rp. 50.000
                </p>
                <br>
                <p class="flow-text">
                Pada contoh, uang bekal untuk 3 hari adalah 3 x Rp 10.000, yaitu Rp. 30.000. Oleh karena
                itu, maka jawabannya adalah C.
                </p>
                <br>
                <p class="flow-text">
                    <b>Mohon siapkan lembar untuk perhitungan sebelum melanjutkan pada soal selanjutnya.</b>
                </p>
                `
            break;
            case 3:
                intro = `
                <p class="flow-text">Pada kelompok soal ini saudara akan diberikan 4 buah kotak yang berisi pola dan 1 buah kotak berisi tanda tanya. Kotak-kotak tersebut memiliki pola yang berhubungan antara satu dengan yang lain. Tugas saudara adalah mencari pola dan menemukan di antara lima pilihan (a, b, c, d dan e) yang merupakan pengganti dari tanda tanya yang diberikan. Perhatikan contoh di bawah ini.</p>
                <br>
                <p class="flow-text"><b>Contoh :</b></p>
                <p class="flow-text">
                    <img class="responsive-image" src="assets/images/exam/cognitive/intro/spacial-1.jpg">
                </p>
                <p class="flow-text">
                <img class="responsive-image" src="assets/images/exam/cognitive/intro/spacial-1-answer.jpg">
                </p>
                <br>
                <p class="flow-text">
                Pada contoh ditampilkan bahwa terdapat beberapa pola perubahan antara kotak satu ke kotak yang lain.  Perubahan pertama adalah bawa segitiga selalu berubah warna dari putih menjadi hitam, putih, hitam dan kembali putih. Sementara yang lain tanda panah berputar 90 derajat kebalikan arah jarum jam. Maka gambar yang tepat yang merupakan pengganti tanda tanya adalah a. 
                </p>
                `
            break;
            default:
            intro = `
                <p class="flow-text">Berikut ini saudara akan menghadapi persoalan bangun ruang. Setiap soal akan disajikan juring kubus yang terbuka dan tugas saudara adalah menemukan kubus manakah yang tersusun dari juring tersebut. Perhatikanlah contoh dibawah ini :</p>
                <br>
                <p class="flow-text"><b>Contoh :</b></p>
                <p class="flow-text">
                    <img class="responsive-image" src="assets/images/exam/cognitive/intro/spacial-2.jpg">
                </p>
                <p class="flow-text">
                <img class="responsive-image" src="assets/images/exam/cognitive/intro/spacial-2-answer.jpg">
                </p>
                <br>
                <p class="flow-text">
                Juring soal yang diberikan merupakan juring yang berasal dari kubus A. Pada beberapa soal saudara diminta untuk memutar ataupun menggulingkan juring yang ada.
                </p>
                `
                break;
        }

        return intro;
    }
}