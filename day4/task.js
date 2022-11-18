// ---------------------------- Task 1 --------------------------------
const obj1 = { name: "Person 1", age: 5 };
const obj2 = { age: 5, name: "Person 1" };

function checkSameObjects(object1, object2) {
  let object1keys = Object.keys(object1);
  let object1values = Object.values(object1);

  let object2keys = Object.keys(object2);
  let object2values = Object.values(object2);

  if (object1keys.length !== object2keys.length) {
    return false;
  } else {
    for (let i = 0; object1keys.length; i++) {
      if (
        object2keys.includes(object1keys[i]) &&
        object2values.includes(object1values[i])
      ) {
        return true;
      }
      return false;
    }
  }
}

console.log(checkSameObjects(obj1, obj2));
// output -> true

// ---------------------------- Task 2 --------------------------------
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

// onload function fires when the readystate has a value 4, so we don't need to check readystate separately
xhr.onload = function () {
  let data = JSON.parse(xhr.response); // data will be an array of all countries
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name, data[i].flag); // Flags of all countries - click on any URL and the flag will open in a new tab
  }
};

// output ->
// Afghanistan https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
// Åland Islands https://flagcdn.com/ax.svg
// Albania https://flagcdn.com/al.svg
// Algeria https://flagcdn.com/dz.svg
// American Samoa https://flagcdn.com/as.svg
// Andorra https://flagcdn.com/ad.svg
// Angola https://flagcdn.com/ao.svg
// Anguilla https://flagcdn.com/ai.svg
// Antarctica https://flagcdn.com/aq.svg
// Antigua and Barbuda https://flagcdn.com/ag.svg
// Argentina https://flagcdn.com/ar.svg
// Armenia https://flagcdn.com/am.svg
// Aruba https://flagcdn.com/aw.svg
// Australia https://flagcdn.com/au.svg
// Austria https://flagcdn.com/at.svg
// Azerbaijan https://flagcdn.com/az.svg
// Bahamas https://flagcdn.com/bs.svg
// Bahrain https://flagcdn.com/bh.svg
// Bangladesh https://flagcdn.com/bd.svg
// Barbados https://flagcdn.com/bb.svg
// Belarus https://flagcdn.com/by.svg
// Belgium https://flagcdn.com/be.svg
// Belize https://flagcdn.com/bz.svg
// Benin https://flagcdn.com/bj.svg
// Bermuda https://flagcdn.com/bm.svg
// Bhutan https://flagcdn.com/bt.svg
// Bolivia (Plurinational State of) https://flagcdn.com/bo.svg
// Bonaire, Sint Eustatius and Saba https://flagcdn.com/bq.svg
// Bosnia and Herzegovina https://flagcdn.com/ba.svg
// Botswana https://flagcdn.com/bw.svg
// Bouvet Island https://flagcdn.com/bv.svg
// Brazil https://flagcdn.com/br.svg
// British Indian Ocean Territory https://flagcdn.com/io.svg
// United States Minor Outlying Islands https://flagcdn.com/um.svg
// Virgin Islands (British) https://flagcdn.com/vg.svg
// Virgin Islands (U.S.) https://flagcdn.com/vi.svg
// Brunei Darussalam https://flagcdn.com/bn.svg
// Bulgaria https://flagcdn.com/bg.svg
// Burkina Faso https://flagcdn.com/bf.svg
// Burundi https://flagcdn.com/bi.svg
// Cambodia https://flagcdn.com/kh.svg
// Cameroon https://flagcdn.com/cm.svg
// Canada https://flagcdn.com/ca.svg
// Cabo Verde https://flagcdn.com/cv.svg
// Cayman Islands https://flagcdn.com/ky.svg
// Central African Republic https://flagcdn.com/cf.svg
// Chad https://flagcdn.com/td.svg
// Chile https://flagcdn.com/cl.svg
// China https://flagcdn.com/cn.svg
// Christmas Island https://flagcdn.com/cx.svg
// Cocos (Keeling) Islands https://flagcdn.com/cc.svg
// Colombia https://flagcdn.com/co.svg
// Comoros https://flagcdn.com/km.svg
// Congo https://flagcdn.com/cg.svg
// Congo (Democratic Republic of the) https://flagcdn.com/cd.svg
// Cook Islands https://flagcdn.com/ck.svg
// Costa Rica https://flagcdn.com/cr.svg
// Croatia https://flagcdn.com/hr.svg
// Cuba https://flagcdn.com/cu.svg
// Curaçao https://flagcdn.com/cw.svg
// Cyprus https://flagcdn.com/cy.svg
// Czech Republic https://flagcdn.com/cz.svg
// Denmark https://flagcdn.com/dk.svg
// Djibouti https://flagcdn.com/dj.svg
// Dominica https://flagcdn.com/dm.svg
// Dominican Republic https://flagcdn.com/do.svg
// Ecuador https://flagcdn.com/ec.svg
// Egypt https://flagcdn.com/eg.svg
// El Salvador https://flagcdn.com/sv.svg
// Equatorial Guinea https://flagcdn.com/gq.svg
// Eritrea https://flagcdn.com/er.svg
// Estonia https://flagcdn.com/ee.svg
// Ethiopia https://flagcdn.com/et.svg
// Falkland Islands (Malvinas) https://flagcdn.com/fk.svg
// Faroe Islands https://flagcdn.com/fo.svg
// Fiji https://flagcdn.com/fj.svg
// Finland https://flagcdn.com/fi.svg
// France https://flagcdn.com/fr.svg
// French Guiana https://flagcdn.com/gf.svg
// French Polynesia https://flagcdn.com/pf.svg
// French Southern Territories https://flagcdn.com/tf.svg
// Gabon https://flagcdn.com/ga.svg
// Gambia https://flagcdn.com/gm.svg
// Georgia https://flagcdn.com/ge.svg
// Germany https://flagcdn.com/de.svg
// Ghana https://flagcdn.com/gh.svg
// Gibraltar https://flagcdn.com/gi.svg
// Greece https://flagcdn.com/gr.svg
// Greenland https://flagcdn.com/gl.svg
// Grenada https://flagcdn.com/gd.svg
// Guadeloupe https://flagcdn.com/gp.svg
// Guam https://flagcdn.com/gu.svg
// Guatemala https://flagcdn.com/gt.svg
// Guernsey https://flagcdn.com/gg.svg
// Guinea https://flagcdn.com/gn.svg
// Guinea-Bissau https://flagcdn.com/gw.svg
// Guyana https://flagcdn.com/gy.svg
// Haiti https://flagcdn.com/ht.svg
// Heard Island and McDonald Islands https://flagcdn.com/hm.svg
// Vatican City https://flagcdn.com/va.svg
// Honduras https://flagcdn.com/hn.svg
// Hungary https://flagcdn.com/hu.svg
// Hong Kong https://flagcdn.com/hk.svg
// Iceland https://flagcdn.com/is.svg
// India https://flagcdn.com/in.svg
// Indonesia https://flagcdn.com/id.svg
// Ivory Coast https://flagcdn.com/ci.svg
// Iran (Islamic Republic of) https://flagcdn.com/ir.svg
// Iraq https://flagcdn.com/iq.svg
// Ireland https://flagcdn.com/ie.svg
// Isle of Man https://flagcdn.com/im.svg
// Israel https://flagcdn.com/il.svg
// Italy https://flagcdn.com/it.svg
// Jamaica https://flagcdn.com/jm.svg
// Japan https://flagcdn.com/jp.svg
// Jersey https://flagcdn.com/je.svg
// Jordan https://flagcdn.com/jo.svg
// Kazakhstan https://flagcdn.com/kz.svg
// Kenya https://flagcdn.com/ke.svg
// Kiribati https://flagcdn.com/ki.svg
// Kuwait https://flagcdn.com/kw.svg
// Kyrgyzstan https://flagcdn.com/kg.svg
// Lao People's Democratic Republic https://flagcdn.com/la.svg
// Latvia https://flagcdn.com/lv.svg
// Lebanon https://flagcdn.com/lb.svg
// Lesotho https://flagcdn.com/ls.svg
// Liberia https://flagcdn.com/lr.svg
// Libya https://flagcdn.com/ly.svg
// Liechtenstein https://flagcdn.com/li.svg
// Lithuania https://flagcdn.com/lt.svg
// Luxembourg https://flagcdn.com/lu.svg
// Macao https://flagcdn.com/mo.svg
// North Macedonia https://flagcdn.com/mk.svg
// Madagascar https://flagcdn.com/mg.svg
// Malawi https://flagcdn.com/mw.svg
// Malaysia https://flagcdn.com/my.svg
// Maldives https://flagcdn.com/mv.svg
// Mali https://flagcdn.com/ml.svg
// Malta https://flagcdn.com/mt.svg
// Marshall Islands https://flagcdn.com/mh.svg
// Martinique https://flagcdn.com/mq.svg
// Mauritania https://flagcdn.com/mr.svg
// Mauritius https://flagcdn.com/mu.svg
// Mayotte https://flagcdn.com/yt.svg
// Mexico https://flagcdn.com/mx.svg
// Micronesia (Federated States of) https://flagcdn.com/fm.svg
// Moldova (Republic of) https://flagcdn.com/md.svg
// Monaco https://flagcdn.com/mc.svg
// Mongolia https://flagcdn.com/mn.svg
// Montenegro https://flagcdn.com/me.svg
// Montserrat https://flagcdn.com/ms.svg
// Morocco https://flagcdn.com/ma.svg
// Mozambique https://flagcdn.com/mz.svg
// Myanmar https://flagcdn.com/mm.svg
// Namibia https://flagcdn.com/na.svg
// Nauru https://flagcdn.com/nr.svg
// Nepal https://flagcdn.com/np.svg
// Netherlands https://flagcdn.com/nl.svg
// New Caledonia https://flagcdn.com/nc.svg
// New Zealand https://flagcdn.com/nz.svg
// Nicaragua https://flagcdn.com/ni.svg
// Niger https://flagcdn.com/ne.svg
// Nigeria https://flagcdn.com/ng.svg
// Niue https://flagcdn.com/nu.svg
// Norfolk Island https://flagcdn.com/nf.svg
// Korea (Democratic People's Republic of) https://flagcdn.com/kp.svg
// Northern Mariana Islands https://flagcdn.com/mp.svg
// Norway https://flagcdn.com/no.svg
// Oman https://flagcdn.com/om.svg
// Pakistan https://flagcdn.com/pk.svg
// Palau https://flagcdn.com/pw.svg
// Palestine, State of https://flagcdn.com/ps.svg
// Panama https://flagcdn.com/pa.svg
// Papua New Guinea https://flagcdn.com/pg.svg
// Paraguay https://flagcdn.com/py.svg
// Peru https://flagcdn.com/pe.svg
// Philippines https://flagcdn.com/ph.svg
// Pitcairn https://flagcdn.com/pn.svg
// Poland https://flagcdn.com/pl.svg
// Portugal https://flagcdn.com/pt.svg
// Puerto Rico https://flagcdn.com/pr.svg
// Qatar https://flagcdn.com/qa.svg
// Republic of Kosovo https://flagcdn.com/xk.svg
// Réunion https://flagcdn.com/re.svg
// Romania https://flagcdn.com/ro.svg
// Russian Federation https://flagcdn.com/ru.svg
// Rwanda https://flagcdn.com/rw.svg
// Saint Barthélemy https://flagcdn.com/bl.svg
// Saint Helena, Ascension and Tristan da Cunha https://flagcdn.com/sh.svg
// Saint Kitts and Nevis https://flagcdn.com/kn.svg
// Saint Lucia https://flagcdn.com/lc.svg
// Saint Martin (French part) https://flagcdn.com/mf.svg
// Saint Pierre and Miquelon https://flagcdn.com/pm.svg
// Saint Vincent and the Grenadines https://flagcdn.com/vc.svg
// Samoa https://flagcdn.com/ws.svg
// San Marino https://flagcdn.com/sm.svg
// Sao Tome and Principe https://flagcdn.com/st.svg
// Saudi Arabia https://flagcdn.com/sa.svg
// Senegal https://flagcdn.com/sn.svg
// Serbia https://flagcdn.com/rs.svg
// Seychelles https://flagcdn.com/sc.svg
// Sierra Leone https://flagcdn.com/sl.svg
// Singapore https://flagcdn.com/sg.svg
// Sint Maarten (Dutch part) https://flagcdn.com/sx.svg
// Slovakia https://flagcdn.com/sk.svg
// Slovenia https://flagcdn.com/si.svg
// Solomon Islands https://flagcdn.com/sb.svg
// Somalia https://flagcdn.com/so.svg
// South Africa https://flagcdn.com/za.svg
// South Georgia and the South Sandwich Islands https://flagcdn.com/gs.svg
// Korea (Republic of) https://flagcdn.com/kr.svg
// Spain https://flagcdn.com/es.svg
// Sri Lanka https://flagcdn.com/lk.svg
// Sudan https://flagcdn.com/sd.svg
// South Sudan https://flagcdn.com/ss.svg
// Suriname https://flagcdn.com/sr.svg
// Svalbard and Jan Mayen https://flagcdn.com/sj.svg
// Swaziland https://flagcdn.com/sz.svg
// Sweden https://flagcdn.com/se.svg
// Switzerland https://flagcdn.com/ch.svg
// Syrian Arab Republic https://flagcdn.com/sy.svg
// Taiwan https://flagcdn.com/tw.svg
// Tajikistan https://flagcdn.com/tj.svg
// Tanzania, United Republic of https://flagcdn.com/tz.svg
// Thailand https://flagcdn.com/th.svg
// Timor-Leste https://flagcdn.com/tl.svg
// Togo https://flagcdn.com/tg.svg
// Tokelau https://flagcdn.com/tk.svg
// Tonga https://flagcdn.com/to.svg
// Trinidad and Tobago https://flagcdn.com/tt.svg
// Tunisia https://flagcdn.com/tn.svg
// Turkey https://flagcdn.com/tr.svg
// Turkmenistan https://flagcdn.com/tm.svg
// Turks and Caicos Islands https://flagcdn.com/tc.svg
// Tuvalu https://flagcdn.com/tv.svg
// Uganda https://flagcdn.com/ug.svg
// Ukraine https://flagcdn.com/ua.svg
// United Arab Emirates https://flagcdn.com/ae.svg
// United Kingdom of Great Britain and Northern Ireland https://flagcdn.com/gb.svg
// United States of America https://flagcdn.com/us.svg
// Uruguay https://flagcdn.com/uy.svg
// Uzbekistan https://flagcdn.com/uz.svg
// Vanuatu https://flagcdn.com/vu.svg
// Venezuela (Bolivarian Republic of) https://flagcdn.com/ve.svg
// Vietnam https://flagcdn.com/vn.svg
// Wallis and Futuna https://flagcdn.com/wf.svg
// Western Sahara https://flagcdn.com/eh.svg
// Yemen https://flagcdn.com/ye.svg
// Zambia https://flagcdn.com/zm.svg
// Zimbabwe https://flagcdn.com/zw.svg

// ---------------------------- Task 3 --------------------------------
const xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://restcountries.com/v2/all");
xhr2.send();

// onload function fires when the readystate has a value 4, so we don't need to check readystate separately
xhr2.onload = function () {
  let data2 = JSON.parse(xhr2.response); // data will be an array of all countries
  for (let i = 0; i < data2.length; i++) {
    console.log(`
      country name: ${data2[i].name},
      subregion: ${data2[i].subregion},
      region: ${data2[i].region},
      population: ${data2[i].population}`); // Flags of all countries - click on any URL and the flag will open in a new tab
  }
};

// output ->
// country name: Afghanistan,
// subregion: Southern Asia,
// region: Asia,
// population: 40218234

// country name: Åland Islands,
// subregion: Northern Europe,
// region: Europe,
// population: 28875

// country name: Albania,
// subregion: Southern Europe,
// region: Europe,
// population: 2837743

// country name: Algeria,
// subregion: Northern Africa,
// region: Africa,
// population: 44700000

// country name: American Samoa,
// subregion: Polynesia,
// region: Oceania,
// population: 55197

// country name: Andorra,
// subregion: Southern Europe,
// region: Europe,
// population: 77265

// country name: Angola,
// subregion: Middle Africa,
// region: Africa,
// population: 32866268

// country name: Anguilla,
// subregion: Caribbean,
// region: Americas,
// population: 13452

// country name: Antarctica,
// subregion: Antarctica,
// region: Polar,
// population: 1000

// country name: Antigua and Barbuda,
// subregion: Caribbean,
// region: Americas,
// population: 97928

// country name: Argentina,
// subregion: South America,
// region: Americas,
// population: 45376763

// country name: Armenia,
// subregion: Western Asia,
// region: Asia,
// population: 2963234

// country name: Aruba,
// subregion: Caribbean,
// region: Americas,
// population: 106766

// country name: Australia,
// subregion: Australia and New Zealand,
// region: Oceania,
// population: 25687041

// country name: Austria,
// subregion: Central Europe,
// region: Europe,
// population: 8917205

// country name: Azerbaijan,
// subregion: Western Asia,
// region: Asia,
// population: 10110116

// country name: Bahamas,
// subregion: Caribbean,
// region: Americas,
// population: 393248

// country name: Bahrain,
// subregion: Western Asia,
// region: Asia,
// population: 1701583

// country name: Bangladesh,
// subregion: Southern Asia,
// region: Asia,
// population: 164689383

// country name: Barbados,
// subregion: Caribbean,
// region: Americas,
// population: 287371

// country name: Belarus,
// subregion: Eastern Europe,
// region: Europe,
// population: 9398861

// country name: Belgium,
// subregion: Western Europe,
// region: Europe,
// population: 11555997

// country name: Belize,
// subregion: Central America,
// region: Americas,
// population: 397621

// country name: Benin,
// subregion: Western Africa,
// region: Africa,
// population: 12123198

// country name: Bermuda,
// subregion: Northern America,
// region: Americas,
// population: 63903

// country name: Bhutan,
// subregion: Southern Asia,
// region: Asia,
// population: 771612

// country name: Bolivia (Plurinational State of),
// subregion: South America,
// region: Americas,
// population: 11673029

// country name: Bonaire, Sint Eustatius and Saba,
// subregion: Caribbean,
// region: Americas,
// population: 17408

// country name: Bosnia and Herzegovina,
// subregion: Southern Europe,
// region: Europe,
// population: 3280815

// country name: Botswana,
// subregion: Southern Africa,
// region: Africa,
// population: 2351625

// country name: Bouvet Island,
// subregion: South Antarctic Ocean,
// region: Antarctic Ocean,
// population: 0

// country name: Brazil,
// subregion: South America,
// region: Americas,
// population: 212559409

// country name: British Indian Ocean Territory,
// subregion: Eastern Africa,
// region: Africa,
// population: 3000

// country name: United States Minor Outlying Islands,
// subregion: Northern America,
// region: Americas,
// population: 300

// country name: Virgin Islands (British),
// subregion: Caribbean,
// region: Americas,
// population: 30237

// country name: Virgin Islands (U.S.),
// subregion: Caribbean,
// region: Americas,
// population: 106290

// country name: Brunei Darussalam,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 437483

// country name: Bulgaria,
// subregion: Eastern Europe,
// region: Europe,
// population: 6927288

// country name: Burkina Faso,
// subregion: Western Africa,
// region: Africa,
// population: 20903278

// country name: Burundi,
// subregion: Eastern Africa,
// region: Africa,
// population: 11890781

// country name: Cambodia,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 16718971

// country name: Cameroon,
// subregion: Middle Africa,
// region: Africa,
// population: 26545864

// country name: Canada,
// subregion: Northern America,
// region: Americas,
// population: 38005238

// country name: Cabo Verde,
// subregion: Western Africa,
// region: Africa,
// population: 555988

// country name: Cayman Islands,
// subregion: Caribbean,
// region: Americas,
// population: 65720

// country name: Central African Republic,
// subregion: Middle Africa,
// region: Africa,
// population: 4829764

// country name: Chad,
// subregion: Middle Africa,
// region: Africa,
// population: 16425859

// country name: Chile,
// subregion: South America,
// region: Americas,
// population: 19116209

// country name: China,
// subregion: Eastern Asia,
// region: Asia,
// population: 1402112000

// country name: Christmas Island,
// subregion: Australia and New Zealand,
// region: Oceania,
// population: 2072

// country name: Cocos (Keeling) Islands,
// subregion: Australia and New Zealand,
// region: Oceania,
// population: 550

// country name: Colombia,
// subregion: South America,
// region: Americas,
// population: 50882884

// country name: Comoros,
// subregion: Eastern Africa,
// region: Africa,
// population: 869595

// country name: Congo,
// subregion: Middle Africa,
// region: Africa,
// population: 5518092

// country name: Congo (Democratic Republic of the),
// subregion: Middle Africa,
// region: Africa,
// population: 89561404

// country name: Cook Islands,
// subregion: Polynesia,
// region: Oceania,
// population: 18100

// country name: Costa Rica,
// subregion: Central America,
// region: Americas,
// population: 5094114

// country name: Croatia,
// subregion: Southern Europe,
// region: Europe,
// population: 4047200

// country name: Cuba,
// subregion: Caribbean,
// region: Americas,
// population: 11326616

// country name: Curaçao,
// subregion: Caribbean,
// region: Americas,
// population: 155014

// country name: Cyprus,
// subregion: Southern Europe,
// region: Europe,
// population: 1207361

// country name: Czech Republic,
// subregion: Central Europe,
// region: Europe,
// population: 10698896

// country name: Denmark,
// subregion: Northern Europe,
// region: Europe,
// population: 5831404

// country name: Djibouti,
// subregion: Eastern Africa,
// region: Africa,
// population: 988002

// country name: Dominica,
// subregion: Caribbean,
// region: Americas,
// population: 71991

// country name: Dominican Republic,
// subregion: Caribbean,
// region: Americas,
// population: 10847904

// country name: Ecuador,
// subregion: South America,
// region: Americas,
// population: 17643060

// country name: Egypt,
// subregion: Northern Africa,
// region: Africa,
// population: 102334403

// country name: El Salvador,
// subregion: Central America,
// region: Americas,
// population: 6486201

// country name: Equatorial Guinea,
// subregion: Middle Africa,
// region: Africa,
// population: 1402985

// country name: Eritrea,
// subregion: Eastern Africa,
// region: Africa,
// population: 5352000

// country name: Estonia,
// subregion: Northern Europe,
// region: Europe,
// population: 1331057

// country name: Ethiopia,
// subregion: Eastern Africa,
// region: Africa,
// population: 114963583

// country name: Falkland Islands (Malvinas),
// subregion: South America,
// region: Americas,
// population: 2563

// country name: Faroe Islands,
// subregion: Northern Europe,
// region: Europe,
// population: 48865

// country name: Fiji,
// subregion: Melanesia,
// region: Oceania,
// population: 896444

// country name: Finland,
// subregion: Northern Europe,
// region: Europe,
// population: 5530719

// country name: France,
// subregion: Western Europe,
// region: Europe,
// population: 67391582

// country name: French Guiana,
// subregion: South America,
// region: Americas,
// population: 254541

// country name: French Polynesia,
// subregion: Polynesia,
// region: Oceania,
// population: 280904

// country name: French Southern Territories,
// subregion: Southern Africa,
// region: Africa,
// population: 140

// country name: Gabon,
// subregion: Middle Africa,
// region: Africa,
// population: 2225728

// country name: Gambia,
// subregion: Western Africa,
// region: Africa,
// population: 2416664

// country name: Georgia,
// subregion: Western Asia,
// region: Asia,
// population: 3714000

// country name: Germany,
// subregion: Central Europe,
// region: Europe,
// population: 83240525

// country name: Ghana,
// subregion: Western Africa,
// region: Africa,
// population: 31072945

// country name: Gibraltar,
// subregion: Southern Europe,
// region: Europe,
// population: 33691

// country name: Greece,
// subregion: Southern Europe,
// region: Europe,
// population: 10715549

// country name: Greenland,
// subregion: Northern America,
// region: Americas,
// population: 56367

// country name: Grenada,
// subregion: Caribbean,
// region: Americas,
// population: 112519

// country name: Guadeloupe,
// subregion: Caribbean,
// region: Americas,
// population: 400132

// country name: Guam,
// subregion: Micronesia,
// region: Oceania,
// population: 168783

// country name: Guatemala,
// subregion: Central America,
// region: Americas,
// population: 16858333

// country name: Guernsey,
// subregion: Northern Europe,
// region: Europe,
// population: 62999

// country name: Guinea,
// subregion: Western Africa,
// region: Africa,
// population: 13132792

// country name: Guinea-Bissau,
// subregion: Western Africa,
// region: Africa,
// population: 1967998

// country name: Guyana,
// subregion: South America,
// region: Americas,
// population: 786559

// country name: Haiti,
// subregion: Caribbean,
// region: Americas,
// population: 11402533

// country name: Heard Island and McDonald Islands,
// subregion: Antarctic,
// region: Antarctic,
// population: 0

// country name: Vatican City,
// subregion: Southern Europe,
// region: Europe,
// population: 451

// country name: Honduras,
// subregion: Central America,
// region: Americas,
// population: 9904608

// country name: Hungary,
// subregion: Central Europe,
// region: Europe,
// population: 9749763

// country name: Hong Kong,
// subregion: Eastern Asia,
// region: Asia,
// population: 7481800

// country name: Iceland,
// subregion: Northern Europe,
// region: Europe,
// population: 366425

// country name: India,
// subregion: Southern Asia,
// region: Asia,
// population: 1380004385

// country name: Indonesia,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 273523621

// country name: Ivory Coast,
// subregion: Western Africa,
// region: Africa,
// population: 26378275

// country name: Iran (Islamic Republic of),
// subregion: Southern Asia,
// region: Asia,
// population: 83992953

// country name: Iraq,
// subregion: Western Asia,
// region: Asia,
// population: 40222503

// country name: Ireland,
// subregion: Northern Europe,
// region: Europe,
// population: 4994724

// country name: Isle of Man,
// subregion: Northern Europe,
// region: Europe,
// population: 85032

// country name: Israel,
// subregion: Western Asia,
// region: Asia,
// population: 9216900

// country name: Italy,
// subregion: Southern Europe,
// region: Europe,
// population: 59554023

// country name: Jamaica,
// subregion: Caribbean,
// region: Americas,
// population: 2961161

// country name: Japan,
// subregion: Eastern Asia,
// region: Asia,
// population: 125836021

// country name: Jersey,
// subregion: Northern Europe,
// region: Europe,
// population: 100800

// country name: Jordan,
// subregion: Western Asia,
// region: Asia,
// population: 10203140

// country name: Kazakhstan,
// subregion: Central Asia,
// region: Asia,
// population: 18754440

// country name: Kenya,
// subregion: Eastern Africa,
// region: Africa,
// population: 53771300

// country name: Kiribati,
// subregion: Micronesia,
// region: Oceania,
// population: 119446

// country name: Kuwait,
// subregion: Western Asia,
// region: Asia,
// population: 4270563

// country name: Kyrgyzstan,
// subregion: Central Asia,
// region: Asia,
// population: 6591600

// country name: Lao People's Democratic Republic,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 7275556

// country name: Latvia,
// subregion: Northern Europe,
// region: Europe,
// population: 1901548

// country name: Lebanon,
// subregion: Western Asia,
// region: Asia,
// population: 6825442

// country name: Lesotho,
// subregion: Southern Africa,
// region: Africa,
// population: 2142252

// country name: Liberia,
// subregion: Western Africa,
// region: Africa,
// population: 5057677

// country name: Libya,
// subregion: Northern Africa,
// region: Africa,
// population: 6871287

// country name: Liechtenstein,
// subregion: Central Europe,
// region: Europe,
// population: 38137

// country name: Lithuania,
// subregion: Northern Europe,
// region: Europe,
// population: 2794700

// country name: Luxembourg,
// subregion: Western Europe,
// region: Europe,
// population: 632275

// country name: Macao,
// subregion: Eastern Asia,
// region: Asia,
// population: 649342

// country name: North Macedonia,
// subregion: Southern Europe,
// region: Europe,
// population: 2083380

// country name: Madagascar,
// subregion: Eastern Africa,
// region: Africa,
// population: 27691019

// country name: Malawi,
// subregion: Eastern Africa,
// region: Africa,
// population: 19129955

// country name: Malaysia,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 32365998

// country name: Maldives,
// subregion: Southern Asia,
// region: Asia,
// population: 540542

// country name: Mali,
// subregion: Western Africa,
// region: Africa,
// population: 20250834

// country name: Malta,
// subregion: Southern Europe,
// region: Europe,
// population: 525285

// country name: Marshall Islands,
// subregion: Micronesia,
// region: Oceania,
// population: 59194

// country name: Martinique,
// subregion: Caribbean,
// region: Americas,
// population: 378243

// country name: Mauritania,
// subregion: Western Africa,
// region: Africa,
// population: 4649660

// country name: Mauritius,
// subregion: Eastern Africa,
// region: Africa,
// population: 1265740

// country name: Mayotte,
// subregion: Eastern Africa,
// region: Africa,
// population: 226915

// country name: Mexico,
// subregion: North America,
// region: Americas,
// population: 128932753

// country name: Micronesia (Federated States of),
// subregion: Micronesia,
// region: Oceania,
// population: 115021

// country name: Moldova (Republic of),
// subregion: Eastern Europe,
// region: Europe,
// population: 2617820

// country name: Monaco,
// subregion: Western Europe,
// region: Europe,
// population: 39244

// country name: Mongolia,
// subregion: Eastern Asia,
// region: Asia,
// population: 3278292

// country name: Montenegro,
// subregion: Southern Europe,
// region: Europe,
// population: 621718

// country name: Montserrat,
// subregion: Caribbean,
// region: Americas,
// population: 4922

// country name: Morocco,
// subregion: Northern Africa,
// region: Africa,
// population: 36910558

// country name: Mozambique,
// subregion: Eastern Africa,
// region: Africa,
// population: 31255435

// country name: Myanmar,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 54409794

// country name: Namibia,
// subregion: Southern Africa,
// region: Africa,
// population: 2540916

// country name: Nauru,
// subregion: Micronesia,
// region: Oceania,
// population: 10834

// country name: Nepal,
// subregion: Southern Asia,
// region: Asia,
// population: 29136808

// country name: Netherlands,
// subregion: Western Europe,
// region: Europe,
// population: 17441139

// country name: New Caledonia,
// subregion: Melanesia,
// region: Oceania,
// population: 271960

// country name: New Zealand,
// subregion: Australia and New Zealand,
// region: Oceania,
// population: 5084300

// country name: Nicaragua,
// subregion: Central America,
// region: Americas,
// population: 6624554

// country name: Niger,
// subregion: Western Africa,
// region: Africa,
// population: 24206636

// country name: Nigeria,
// subregion: Western Africa,
// region: Africa,
// population: 206139587

// country name: Niue,
// subregion: Polynesia,
// region: Oceania,
// population: 1470

// country name: Norfolk Island,
// subregion: Australia and New Zealand,
// region: Oceania,
// population: 2302

// country name: Korea (Democratic People's Republic of),
// subregion: Eastern Asia,
// region: Asia,
// population: 25778815

// country name: Northern Mariana Islands,
// subregion: Micronesia,
// region: Oceania,
// population: 57557

// country name: Norway,
// subregion: Northern Europe,
// region: Europe,
// population: 5379475

// country name: Oman,
// subregion: Western Asia,
// region: Asia,
// population: 5106622

// country name: Pakistan,
// subregion: Southern Asia,
// region: Asia,
// population: 220892331

// country name: Palau,
// subregion: Micronesia,
// region: Oceania,
// population: 18092

// country name: Palestine, State of,
// subregion: Western Asia,
// region: Asia,
// population: 4803269

// country name: Panama,
// subregion: Central America,
// region: Americas,
// population: 4314768

// country name: Papua New Guinea,
// subregion: Melanesia,
// region: Oceania,
// population: 8947027

// country name: Paraguay,
// subregion: South America,
// region: Americas,
// population: 7132530

// country name: Peru,
// subregion: South America,
// region: Americas,
// population: 32971846

// country name: Philippines,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 109581085

// country name: Pitcairn,
// subregion: Polynesia,
// region: Oceania,
// population: 56

// country name: Poland,
// subregion: Central Europe,
// region: Europe,
// population: 37950802

// country name: Portugal,
// subregion: Southern Europe,
// region: Europe,
// population: 10305564

// country name: Puerto Rico,
// subregion: Caribbean,
// region: Americas,
// population: 3194034

// country name: Qatar,
// subregion: Western Asia,
// region: Asia,
// population: 2881060

// country name: Republic of Kosovo,
// subregion: Eastern Europe,
// region: Europe,
// population: 1775378

// country name: Réunion,
// subregion: Eastern Africa,
// region: Africa,
// population: 840974

// country name: Romania,
// subregion: Eastern Europe,
// region: Europe,
// population: 19286123

// country name: Russian Federation,
// subregion: Eastern Europe,
// region: Europe,
// population: 144104080

// country name: Rwanda,
// subregion: Eastern Africa,
// region: Africa,
// population: 12952209

// country name: Saint Barthélemy,
// subregion: Caribbean,
// region: Americas,
// population: 9417

// country name: Saint Helena, Ascension and Tristan da Cunha,
// subregion: Western Africa,
// region: Africa,
// population: 4255

// country name: Saint Kitts and Nevis,
// subregion: Caribbean,
// region: Americas,
// population: 53192

// country name: Saint Lucia,
// subregion: Caribbean,
// region: Americas,
// population: 183629

// country name: Saint Martin (French part),
// subregion: Caribbean,
// region: Americas,
// population: 38659

// country name: Saint Pierre and Miquelon,
// subregion: Northern America,
// region: Americas,
// population: 6069

// country name: Saint Vincent and the Grenadines,
// subregion: Caribbean,
// region: Americas,
// population: 110947

// country name: Samoa,
// subregion: Polynesia,
// region: Oceania,
// population: 198410

// country name: San Marino,
// subregion: Southern Europe,
// region: Europe,
// population: 33938

// country name: Sao Tome and Principe,
// subregion: Middle Africa,
// region: Africa,
// population: 219161

// country name: Saudi Arabia,
// subregion: Western Asia,
// region: Asia,
// population: 34813867

// country name: Senegal,
// subregion: Western Africa,
// region: Africa,
// population: 16743930

// country name: Serbia,
// subregion: Southern Europe,
// region: Europe,
// population: 6908224

// country name: Seychelles,
// subregion: Eastern Africa,
// region: Africa,
// population: 98462

// country name: Sierra Leone,
// subregion: Western Africa,
// region: Africa,
// population: 7976985

// country name: Singapore,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 5685807

// country name: Sint Maarten (Dutch part),
// subregion: Caribbean,
// region: Americas,
// population: 40812

// country name: Slovakia,
// subregion: Central Europe,
// region: Europe,
// population: 5458827

// country name: Slovenia,
// subregion: Southern Europe,
// region: Europe,
// population: 2100126

// country name: Solomon Islands,
// subregion: Melanesia,
// region: Oceania,
// population: 686878

// country name: Somalia,
// subregion: Eastern Africa,
// region: Africa,
// population: 15893219

// country name: South Africa,
// subregion: Southern Africa,
// region: Africa,
// population: 59308690

// country name: South Georgia and the South Sandwich Islands,
// subregion: South America,
// region: Americas,
// population: 30

// country name: Korea (Republic of),
// subregion: Eastern Asia,
// region: Asia,
// population: 51780579

// country name: Spain,
// subregion: Southern Europe,
// region: Europe,
// population: 47351567

// country name: Sri Lanka,
// subregion: Southern Asia,
// region: Asia,
// population: 21919000

// country name: Sudan,
// subregion: Northern Africa,
// region: Africa,
// population: 43849269

// country name: South Sudan,
// subregion: Middle Africa,
// region: Africa,
// population: 11193729

// country name: Suriname,
// subregion: South America,
// region: Americas,
// population: 586634

// country name: Svalbard and Jan Mayen,
// subregion: Northern Europe,
// region: Europe,
// population: 2562

// country name: Swaziland,
// subregion: Southern Africa,
// region: Africa,
// population: 1160164

// country name: Sweden,
// subregion: Northern Europe,
// region: Europe,
// population: 10353442

// country name: Switzerland,
// subregion: Central Europe,
// region: Europe,
// population: 8636896

// country name: Syrian Arab Republic,
// subregion: Western Asia,
// region: Asia,
// population: 17500657

// country name: Taiwan,
// subregion: Eastern Asia,
// region: Asia,
// population: 23503349

// country name: Tajikistan,
// subregion: Central Asia,
// region: Asia,
// population: 9537642

// country name: Tanzania, United Republic of,
// subregion: Eastern Africa,
// region: Africa,
// population: 59734213

// country name: Thailand,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 69799978

// country name: Timor-Leste,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 1318442

// country name: Togo,
// subregion: Western Africa,
// region: Africa,
// population: 8278737

// country name: Tokelau,
// subregion: Polynesia,
// region: Oceania,
// population: 1411

// country name: Tonga,
// subregion: Polynesia,
// region: Oceania,
// population: 105697

// country name: Trinidad and Tobago,
// subregion: Caribbean,
// region: Americas,
// population: 1399491

// country name: Tunisia,
// subregion: Northern Africa,
// region: Africa,
// population: 11818618

// country name: Turkey,
// subregion: Western Asia,
// region: Asia,
// population: 84339067

// country name: Turkmenistan,
// subregion: Central Asia,
// region: Asia,
// population: 6031187

// country name: Turks and Caicos Islands,
// subregion: Caribbean,
// region: Americas,
// population: 38718

// country name: Tuvalu,
// subregion: Polynesia,
// region: Oceania,
// population: 11792

// country name: Uganda,
// subregion: Eastern Africa,
// region: Africa,
// population: 45741000

// country name: Ukraine,
// subregion: Eastern Europe,
// region: Europe,
// population: 44134693

// country name: United Arab Emirates,
// subregion: Western Asia,
// region: Asia,
// population: 9890400

// country name: United Kingdom of Great Britain and Northern Ireland,
// subregion: Northern Europe,
// region: Europe,
// population: 67215293

// country name: United States of America,
// subregion: Northern America,
// region: Americas,
// population: 329484123

// country name: Uruguay,
// subregion: South America,
// region: Americas,
// population: 3473727

// country name: Uzbekistan,
// subregion: Central Asia,
// region: Asia,
// population: 34232050

// country name: Vanuatu,
// subregion: Melanesia,
// region: Oceania,
// population: 307150

// country name: Venezuela (Bolivarian Republic of),
// subregion: South America,
// region: Americas,
// population: 28435943

// country name: Vietnam,
// subregion: South-Eastern Asia,
// region: Asia,
// population: 97338583

// country name: Wallis and Futuna,
// subregion: Polynesia,
// region: Oceania,
// population: 11750

// country name: Western Sahara,
// subregion: Northern Africa,
// region: Africa,
// population: 510713

// country name: Yemen,
// subregion: Western Asia,
// region: Asia,
// population: 29825968

// country name: Zambia,
// subregion: Eastern Africa,
// region: Africa,
// population: 18383956

// country name: Zimbabwe,
// subregion: Southern Africa,
// region: Africa,
// population: 14862927
