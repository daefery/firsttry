export const Biodata = {
  "form_name":"biodata",
  "data":[
    {
      "type":"section",
      "label":"Informasi Umum"
    },
    {
      "type":"group",
      "values":[
        {
          "name":"full_name",
          "type":"text",
          "label":"Nama Lengkap",
          "div_class":"col s6",
          "input_class":"",
          "validation": {
            "required": true,
            "maxLength":2,
            "minLength":2
          },
          "values":[],
          "alternative_text":"",
          "event":""
        },
        {
          "name":"gender",
          "type":"select",
          "label":"Jenis Kelamin",
          "div_class":"col s6",
          "input_class":"",
          "validation": {
            "required": true
          },
          "values":[
            {"label":"Laki-Laki", "value":"L"},
            {"label":"Perempuan", "value":"P"}
          ],
          "alternative_text":"Pilih Jenis Kelamin",
          "event":"getType()"
        },
      ]
    },
    {
      "type":"group",
      "values":[
        {
          "name":"religion",
          "type":"select",
          "label":"Agama",
          "div_class":"col s6",
          "input_class":"",
          "validation": {
            "required": true
          },
          "values":[
            {"label":"Islam", "value":"Islam"},
            {"label":"Kristen", "value":"Kristen"}
          ],
          "alternative_text":"Pilih Agama",
          "event":""
        },
        {
          "name":"blood_type",
          "type":"select",
          "label":"Golongan Darah",
          "div_class":"col s6",
          "input_class":"",
          "validation": {
            "required": true
          },
          "values":[
            {"label":"A", "value":"O"},
            {"label":"O", "value":"O"}
          ],
          "alternative_text":"Pilih Golongan Darah",
          "event":""
        },
      ]
    },
    {
      "type":"group",
      "values":[
        {
          "name":"birth_place",
          "type":"text",
          "label":"Tempat Lahir",
          "div_class":"col s6",
          "input_class":"",
          "validation": "required minlength='4'",
          "values":[],
          "alternative_text":"",
          "event":""
        },
        {
          "name":"birthdate",
          "type":"date",
          "label":"Tanggal Lahir",
          "div_class":"col s6",
          "input_class":"",
          "validation":"",
          "values":[],
          "alternative_text":"",
          "event":""
        },
      ]
    },
    {
      "type":"section",
      "label":"Kontak Informasi"
    },
    {
        "type":"group",
        "values":[
          {
            "name":"email",
            "type":"email",
            "label":"Email",
            "div_class":"col s6",
            "input_class":"",
            "validation": {
              "required": true
            },
            "values":[],
            "alternative_text":"",
            "event":""
          },
          {
            "name":"phone",
            "type":"text",
            "label":"No Telepon",
            "div_class":"col s6",
            "input_class":"",
            "validation": "required minlength='4'",
            "values":[],
            "alternative_text":"",
            "event":""
          }
        ]
      },
      {
        "type":"single",
        "values":[
          {
            "name":"save_biodata",
            "type":"button",
            "label":"Save",
            "div_class":"col s6",
            "input_class":"",
            "validation": {
              "required": true
            },
            "values":[],
            "alternative_text":"",
            "event":""
          }
        ]
      },
  ]
};