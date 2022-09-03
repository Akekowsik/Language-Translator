const languages = ['af','ak','am','ar','as','ay','az','be','bg','bho','bm','bn','bs','ca','ceb','ckb','co','cs','cy','da','de','doi','dv','ee','el','en','eo','es','et','eu','fa','fi','fr','fy','ga','gd','gl','gn','gom','gu','ha','haw','he','hi','hmn','hr','ht','hu','hy','id','ig','ilo','is','it','ja','jw','ka','kk','km','kn','ko','kri','ku','ky','la','lb','lg','ln','lo','lt','lus','lv','mai','mg','mi','mk','ml','mn','mni-Mtei','mr','ms','mt','my','ne','nl','no','nso','ny','om','or','pa','pl','ps','pt','qu','ro','ru','rw','sa','sd','si','sk','sl','sm','sn','so','sq','sr','st','su','sv','sw','ta','ug','uk','ur','uz','vi','xh','yi','yo','zh','zh-CN','zh-TW','zu']
const langfullnames = ['Afrikaans','Akan','Amharic','Arabic','Assamese','Aymara','Azerbaijani',
                      'Belarusian','Bulgarian','Bhojpuri','Bambara','Bangla','Bosnian',
                      'Catalan','Cebuano','Central Kurdish','Corsican','Czech','Welsh',
                      'Danish','German','Dogri','Dhivehi',
                      'Ewe','Greek','English','Esperanto','Spanish','Estonian','Basque',
                      'Persian','Finnish','French','Western Frisian',
                      'Irish','Scottish Gaelic','Galician','Guarani','Konkani','Gujarati',
                      'Hausa','Hawaiian','Hebrew','Hindi','Hmong','Croatian','Haitian','Hungarian','Armenian', 
                      'Indonesian','Igbo','Iloko','Icelandic','Italian',
                      'Japanese','Javanese',
                      'Georgian','Kazakh','Central Khmer','Kannada','Korean','Krio','Kurdish','Kyrgryz',
                      'Latin','Luxembourgish','Ganda','Lingala','Lao','Lituanian','Lushai','Latvian',
                      'Maithili','Malagasy','Maori','Macedonian','Malayalam','Mongolian','Manipuri','Marathi','Malay','Maltese','Burmese',
                      'Nepali','Dutch','Norwegian','Lam-Nso','Nyanja',
                      'Oromo','Odia',
                      'Punjabi','Polish','Pashto','Portuguese',
                      'Quechua',
                      'Romanian','Russian','Kinyarwanda',
                      'Sanskrit','Sindhi','Sinhala','Slovak','Slovanian','Samoan','Shona','Somali','Albanian','Serbian','Southern Sotho','Sudanese','Swedish','Swahili',
                      'Tamil',
                      'Uyghur','Ukranian','Urdu','Uzbek',
                      'Vietnamese',
                      'Xhosa',
                      'Yiddish','Yoruba',
                      'Chinese','Traditional Chinese','Taiwanese','Zulu']
const text = '';

const dropdown = document.getElementById('drop');
for(var i=0; i < languages.length; i++){
  const option = document.createElement('option')
  option.setAttribute('value',languages[i])
  const text = document.createTextNode(langfullnames[i])
  option.appendChild(text)
  dropdown.appendChild(option)
  if(languages[i]=='en'){
    option.setAttribute('selected','selected')
  }
}

const trans = () => {
  const text = document.getElementById('text').value
  const language_code = document.getElementById('drop').value
  const result = document.getElementById('result')
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", text);
  encodedParams.append("target", language_code);
  encodedParams.append("source", "en");

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'd710ea478emsh43a7df9e5c0a9d5p1ab529jsn43996cef26ff',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams
  };

  axios.request(options).then(function (response) {
    result.textContent = response.data.data.translations[0].translatedText
  }).catch(function (error) {
    console.error(error);
  });
}

