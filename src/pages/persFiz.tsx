import React, { useState } from 'react';
import ConstrainedHeaderComponent from '../components/constrainedHeaderComponent';
import Footer from '../components/footer';

const insuranceContent = {
  rca: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Asigurarea obligatorie de răspundere civilă auto internă (RCA)</h2>
      <p className="mb-4">
        Asigurarea obligatorie de răspundere civilă auto internă (RCA) reprezintă un contract încheiat între posesorul de vehicul, numit asigurat (persoană fizică sau juridică) și compania de asigurare. În schimbul primei de asigurare, asigurătorul se obligă ca la producerea riscului asigurat să achite dauna produsă terței persoane.
      </p>
      <h3 className="text-xl font-semibold mb-2">Forma juridică de realizare – asigurare OBLIGATORIE</h3>
      <p className="mb-4">
        Asigurarea obligatorie de răspundere civilă auto (AORCA) are menirea de a apăra interesul economic și social al întregii comunități precum și de a proteja victimele unor accidente. Astfel, lipsa RCA este pedepsită conform Codului Contravențional al RM.
      </p>
      <p className="mb-4">
        Încheierea contractului este obligatorie nu numai pentru posesorii de vehicule, dar și pentru asigurători. Refuzul asigurătorului de a emite o poliță de asigurare sau de a încheia contractul de asigurare obligatorie, la cererea posesorului de vehicul, constituie o încălcare a drepturilor consumatorului și se sancționează în corespundere cu legislaţia.
      </p>
      <h3 className="text-xl font-semibold mb-2">Teritoriul acoperit</h3>
      <p className="mb-4">
        Polița de asigurare RCA este valabilă pe întreg teritoriul Republicii Moldova.
      </p>
      <h3 className="text-xl font-semibold mb-2">Termen de valabilitate</h3>
      <p className="mb-4">
        Contractul de asigurare RCA se emite pentru un termen de 12 luni. Excepție fac doar contractele de asigurare încheiate pentru vehiculele înmatriculate în străinătate, ce nu dețin Carte Verde, în acest caz, contractul poate fi încheiat pentru un termen minim de 30 zile, maxim de 12 luni.
      </p>
      <h3 className="text-xl font-semibold mb-2">Reglementarea contractului RCA</h3>
      <p className="mb-4">
        Contractul de asigurare RCA este reglementat de următoarele acte normative:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Legea Nr. 92 din 07.04.2022 privind activitatea de asigurare sau de reasigurare;</li>
        <li>Legea Nr. 106 din 21.04.2022 privind asigurarea obligatorie de răspundere civilă pentru pagube produse de vehicule;</li>
        <li>Codul Civil al Republicii Moldova art. 1822 - art. 19161.</li>
      </ul>
      <p className="mb-4">
        Pentru a încheia o polița de asigurare RCA trebuie îndeplinite următoarele condiții:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Vehiculul să fie înmatriculat / supus înmatriculării sau înregistrat în Moldova;</li>
        <li>Vehicule înmatriculate în străinătate care se folosesc pe teritoriul Republicii Moldova;</li>
        <li>Prezentarea documentelor de identificare ale vehiculului – certificat de înmatriculare;</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Limitele de despăgubire</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Vătămările corporale sau decesul:
          <ul className="list-disc list-inside ml-6">
            <li>100 000 euro* per persoană</li>
            <li>500 000 euro* per caz</li>
          </ul>
        </li>
        <li>Pagubele materiale
          <ul className="list-disc list-inside ml-6">
            <li>100 000 euro*</li>
            <li>pentru prejudiciile morale ca urmare a dizabilității sau a decesului:
              <ul className="list-disc list-inside ml-6">
                <li>5000 euro* per persoană</li>
                <li>10 000 euro* per caz</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p className="mb-4">
        * cu echivalentul în lei la cursul oficial BNM
      </p>
      <h3 className="text-xl font-semibold mb-2">Ce se despăgubește de asigurarea RCA?</h3>
      <p className="mb-4">
        Asigurătorul trebuie să compenseze prejudiciile cauzate persoanei păgubite prin accident de vehicul:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>În cadrul asigurării obligatorii RCA, cazul asigurat este accidentul produs de un vehicul al cărui proprietar și/sau utilizator a îndeplinit obligația de asigurare obligatorie RCA, cu producerea de pagube:</li>
        <li>Atât în timpul deplasării, cât și în timpul staționării vehiculului;</li>
        <li>În urma desprinderii accidentale, în timpul deplasării vehiculului, a remorcilor, semiremorcilor sau atașelor;</li>
        <li>De dispozitivele sau instalațiile cu care a fost echipat vehiculul;</li>
        <li>Ca urmare a scurgerii, risipirii sau căderii accidentale a substanțelor, a materialelor sau a obiectelor transportate;</li>
        <li>La urcarea în vehicul și la coborârea din acesta.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Se despăgubesc şi următoarele cheltuieli:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Vătămări corporale sau deces, inclusiv pentru prejudicii morale;</li>
        <li>Daune materiale, inclusiv costuri de radiere a vehiculului și cheltuieli de diminuare a daunei;</li>
        <li>Costuri privind reparația vehiculului, dovedite prin documente emise de către unitățile de reparații sau prin documente emise în condițiile prezentei legi;</li>
        <li>Cheltuieli de judecată suportate de persoana păgubită în procesul civil sau cheltuieli aferente în cazul soluționării alternative a litigiului, dacă soluția este favorabilă pentru persoana păgubită;</li>
        <li>Costul aferent unei singure evacuări a vehiculului avariat, care aparține persoanei păgubite, de la locul accidentului la locația reprezentantului de despăgubiri sau la unitatea de reparații aleasă de către persoana păgubită, în vederea reparării vehiculului, sau la cea mai apropiată locație de locul producerii accidentului sau la domiciliul persoanei păgubite, după caz, dacă respectivul vehicul nu se mai poate deplasa prin mijloace proprii sau deplasarea acestuia poate provoca pericol pentru siguranța traficului rutier.</li>
      </ul>
    </div>
  ),
  casco: (
    <div>
      <h2 className="text-2xl font-bold mb-4">De ce am nevoie de CASCO?</h2>
      <p className="mb-4">
        CASCO este o asigurare auto facultativă ce acoperă daunele aduse propriului autovehicul. Astfel, dacă poliţa de asigurare RCA despăgubeşte daunele produse terţelor persoane, atunci CASCO despăgubeşte asiguratul, indiferent cine este vinovat de accident.
      </p>
      <p className="mb-4">
        CASCO acoperă atât daunele produse prin accidente, acțiunile răufăcătoare ale terțelor persoane, calamităţi naturale, cât şi ca urmare a furtului autovehiculului, părţilor componente sau pieselor acestuia. Astfel, în cazul existenţei unui risc crescut de furt al automobilului dvs., CASCO poate fi o soluţie de minimizare a eventualelor pagube.
      </p>
      <p className="mb-4">
        Deşi, CASCO presupune asigurarea autovehiculului, majoritatea companiilor oferă posibilitatea asigurării echipamentului suplimentar, precum şi a vieţii şi sănătăţii conducătorului auto şi a pasagerilor săi.
      </p>
      <p className="mb-4">
        La contractarea unei asigurări CASCO, companiile oferă diverse tipuri de avantaje, cum ar fi evacuator în caz de accident, asistenţă nonstop sau maşină la schimb pe durata reparaţiei propriului autoturism.
      </p>
      <p className="mb-4">
        În dependenţă de contractul încheiat, CASCO poate oferi protecţie atât în R.Moldova cât şi peste hotarele ei (Europa, Turcia şi CSI).
      </p>
      <p className="mb-4">
        Pe lângă riscurile standard acoperite, CASCO poate fi personalizat cu acoperiri şi servicii suplimentare, în funcţie de preferinţe şi necesităţi.
      </p>
      <h3 className="text-xl font-semibold mb-2">Care factori influenţează costul asigurării CASCO?</h3>
      <p className="mb-4">
        Condiţiile de asigurare CASCO variază de la o companie la alta, atât în ceea ce priveşte riscurile asigurate, riscurile excluse, valoarea franşizei, cât şi în ceea ce priveşte primele de asigurare şi condiţiile de plată a acestora.
      </p>
      <p className="mb-4">
        Spre deosebire de RCA, prima de asigurare pentru CASCO este mult mai mare. Asigurătorul iniţial colectează şi analizează toate informaţiile necesare, iar ulterior emite o ofertă.
      </p>
      <p className="mb-4">
        Preţul unei poliţe de asigurare CASCO poate varia în funcţie de:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Caracteristicile autovehiculului</li>
        <li>Modelul etc;</li>
        <li>Vechimea mijlocului de transport;</li>
        <li>Valoarea de piaţă;</li>
        <li>Marca;</li>
        <li>Opţiunile şi clauzele contractuale</li>
        <li>Riscurile asigurate – mai multe riscuri, un preţ mai mare;</li>
        <li>Prezenţa/absenţa franşizei şi cuantumul acesteia – cu cât este mai mare franşiza, cu atât prima de asigurare se micşorează;</li>
        <li>Vârsta, stagiul şi numărul persoanelor admise la conducere – cu cât vârsta şi stagiul sunt mai mici, cu atât mai mare va fi prima de asigurare;</li>
        <li>Termenul de asigurare – dacă durata este mai mică de un an, de regulă, nu este mai avantajos excluzându-se anumite facilități care sunt prezente în asigurarea contractată pe un an;</li>
        <li>Plata integrală sau în rate – de obicei, achitarea integrală diminuează din preţul asigurării;</li>
        <li>Istoricul şoferului – cu cât mai responsabil este conducătorul auto, cu atât prima va fi mai mică. Se pot oferi reduceri conducătorilor auto prudenţi şi fără dosare de daune sau cu puţine antecedente;</li>
        <li>Extinderea teritorială – cu cât teritoriul acoperit va fi mai mare, respectiv şi cuantumul primei va creşte.</li>
      </ul>
      <p className="mb-4">
        Trebuie menţionat că anumite companii de asigurări acoperă diverse riscuri doar ca şi clauze speciale, pentru care se plăteşte o sumă suplimentară, ceea ce face ca suma iniţială pentru asigurare să pară mai mică – datorită faptului ca nu s-au inclus unele riscuri cum ar fi: reparația la dealer, asigurarea echipamentului suplimentar etc) . De aceea, înainte de a încheia o asigurare CASCO, este necesară informarea temeinică cu privire la riscurile neacoperite de aceasta.
      </p>
      <p className="mb-4">
        Toate drepturile şi obligaţiile părţilor se găsesc în contractul de asigurare CASCO încheiat. Astfel, este extrem de importantă citirea cu atenţie a clauzelor contractuale şi în special a celor referitoare la riscurile acoperite, excluderi (riscuri neacoperite), valoarea franşizei şi felul ei, procedurile de avizare şi lichidare a daunei.
      </p>
      <p className="mb-4">
        Pentru evitarea unor eventuale neînţelegeri la plata despăgubirilor, este necesar de a cere cât mai multe informaţii de la agentul asigurător.
      </p>
      <h3 className="text-xl font-semibold mb-2">Ce este franşiza? Cui i se potriveşte o asigurare cu franşiză?</h3>
      <p className="mb-4">
        Franşiza este partea din daună suportată de asigurat. Adică, este acea parte din valoarea fiecărei daune pe care o suportă proprietarul maşinii şi nu asigurătorul.
      </p>
      <p className="mb-4">
        Cuantumul franşizei este diferit şi variază de la o companie de asigurări la alta. Aceasta poate fi aplicată ca:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Sumă fixă (se scade aceeaşi sumă la fiecare daună în parte. Este avantajos pentru cei care nu doresc să achite o sumă mare în caz de daune majore. Neavantajos – pentru cazurile de daună mică);</li>
        <li>Procent din suma asigurată (ex: o maşină asigurată la 10.000 de euro, cu o franşiză de 1% din suma asigurată (100 de euro), în cazul unei avarii a cărei reparaţie costă 500 de euro, asigurătorul va achita 400 de euro, iar proprietarul 100 de euro. La o a doua avarie, de 100 de euro, asigurătorul nu va plăti nimic, iar proprietarul va plăti toţi cei 100 de euro);</li>
        <li>Procent din valoarea fiecărei daune (ex: o maşină asigurată la 10.000 de euro cu o franşiza de 1% din valoarea daunei, în cazul unei avarii a cărei reparaţie costă 500 de euro, asigurătorul va plăti 495 de euro şi proprietarul 5 euro. La o a doua avarie, de 100 de euro, asigurătorul va plăti 99 de euro şi proprietarul 1 euro).</li>
      </ul>
      <p className="mb-4">
        Astfel, în dependenţă de felul franşizei, trebuie să fim foarte atenți ce selectați, există diferenţe foarte mari între sumele datorate de fiecare dintre părţi, nefiind similar un procent din valoarea daunei cu un procent din suma asigurată.
      </p>
      <p className="mb-4">
        Felul şi mărimea franşizei influenţează direct şi costul asigurării. În cazul în care poliţa de asigurare nu are inclusă franşiza, atunci primele de asigurare sunt mai scumpe şi invers.
      </p>
      <p className="mb-4">
        Franşiza are un rol de responsabilizare şi nu de taxă suplimentară. Ea dă posibilitatea de a economisi şoferilor responsabili, care nu sunt predispuşi la accidente minore. Însă dacă şoferul nu este experimentat şi vrea să obţină despăgubiri chiar şi pentru cele mai mici daune, atunci este de preferat contractarea unei asigurări fără franşiză.
      </p>
      <h3 className="text-xl font-semibold mb-2">Ce măsuri trebuie întreprinse pentru soluţionarea cazului asigurat?</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Întreprindeţi toate măsurile necesare pentru salvarea autovehiculului și pentru eliminarea cauzelor care ar putea produce daune suplimentare;</li>
        <li>Sesizaţi organele competente (poliția, pompieri etc.) pentru obținerea ulterioară a documentelor doveditoare ale producerii accidentului;</li>
        <li>Dacă de producerea accidentului se face vinovată o terță persoană, faceţi o copie de pe asigurarea acestuia;</li>
        <li>Notificaţi în scris compania de asigurări în decurs de 24 de ore (cu excepția zilelor de odihnă și de sărbătoare), la producerea cazurilor de furt total sau parțial și în decurs de 48 de ore pentru cazurile de daună parțială sau totală;</li>
        <li>Prezentaţi companiei de asigurări, în decurs de 3 zile lucrătoare de la data accidentului, autovehiculul deteriorat, în vederea regularizării cazului asigurat sau permiteţi reprezentantului companiei de asigurări efectuarea inspecției la locul aflării autoturismului.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Pentru obţinerea despăgubirii sunt necesare următoarele acte:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Contractul de asigurare (poliţa de asigurare) însoțit de bonul fiscal sau alt document ce atestă achitarea asigurării;</li>
        <li>Certificatul eliberat de organele competente, ce confirmă producerea cazului asigurat;</li>
        <li>Copia certificatului de înmatriculare a autoturismului; copia raportului de examinare tehnică periodică a autoturismului; copia permisului de conducere al persoanei care conducea vehiculul la momentul producerii evenimentului asigurat iar în cazul persoanelor juridice şi copia foii de parcurs sau procurii;</li>
        <li>Ordonanţa de începere, suspendare sau încetare a urmăririi penale (după caz), care se prezintă în cazul producerii riscurilor asigurate prin acţiuni ilicite ale terţelor persoane;</li>
        <li>Ordonanţa de recunoaştere a asiguratului în calitate de parte civilă (parte vătămată), după caz;</li>
        <li>Copii ale proceselor-verbale de constatare a contravenţiilor administrative, în cazul accidentelor de circulaţie, însoţite de copiile rapoartelor de expertiză medicală, schema accidentului de circulaţie, explicaţiile participanţilor depuse la dosarul contravenţional;</li>
        <li>Copia poliţei de asigurare obligatorie de răspundere civilă auto a persoanei responsabile de producerea pagubei (în cazul accidentelor de circulaţie).</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Ce fac dacă suma despăgubirii este mică sau în general este refuzată despăgubirea de către compania de asigurări?</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Cereţi de la compania de asigurări procesul-verbal de constatare şi evaluare a pagubelor;</li>
        <li>Cereţi de la organele competente (poliţie, pompieri etc.) acte în original referitor la cauzele şi circumstanţele producerii accidentului, precum şi consecinţele acestuia;</li>
        <li>Cereţi de la bancă, actul ce demonstrează suma de bani transferată dvs. de către compania de asigurări. În cazul în care asigurătorul a refuzat acordarea despăgubirilor, cereţi de la companie prezentarea în scris a refuzului;</li>
        <li>Efectuaţi o expertiză proprie, apelând la serviciile experţilor independenţi;</li>
        <li>Întocmiţi un act cu toate pretenţiile dvs., referitoare la suma despăgubirii sau refuzul de despăgubire şi prezentaţi-l asigurătorului. Nu uitați că orice cerere adresată asigurătorului trebuie înregistrată, prin parafa companiei de asigurări, cu indicarea numărului de intrare și data primirii sau trimisă cu scrisoare recomandată;</li>
        <li>În caz de nesoluţionare a cererii dvs. pe cale amiabilă de către asigurător, întocmiţi şi depuneţi o cerere de chemare în judecată;</li>
        <li>Dacă aveţi câştig de cauză, cereţi executarea silită a hotărârii;</li>
        <li>Pentru a avertiza şi alte persoane despre compania de asigurări cu probleme, puteţi lăsa comentarii pe site-urile de specialitate;</li>
        <li>Dacă doriţi sancţionarea companiei de asigurări, vă puteţi adresa autorităţii de supraveghere (Comisia Națională a Pieței Financiare).</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Ce riscuri nu acoperă CASCO?</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Autovehiculul asigurat este exploatat cu raportul de examinare tehnică expirat;</li>
        <li>Mijlocul de transport este exploatat cu încălcarea prevederilor Regulamentului Circulației Rutiere, cu referire la nedotarea autovehiculului pe timp de iarnă cu anvelope destinate conducerii pe anotimpul rece, în perioada decembrie – martie inclusiv;</li>
        <li>Neinformarea asigurătorului în scris timp de 48 de ore din momentul producerii accidentului, în cazul deteriorării mijlocului de transport și 24 de ore în cazul furtului mijlocului de transport;</li>
        <li>La momentul furtului mijlocului de transport, certificatul de înmatriculare și cheile se aflau în interiorul/habitaclul acestuia;</li>
        <li>Exploatarea vehiculului în afara teritoriului de acțiune a contractului;</li>
        <li>Mijlocul de transport este condus de o persoană neadmisă la conducerea vehiculului conform contractului de asigurare;</li>
        <li>Autoturismul asigurat este condus de o persoană fără permis de conducere valabil pentru categoria respectivă ori cu permisul de conducere retras/anulat sau avea suspendat dreptul de a conduce;</li>
        <li>Conducătorul vehiculului asigurat a condus în stare de ebrietate alcoolică sau sub influența stupefiantelor/substanțelor narcotice, sau s-a eschivat de la examenul medical de constatare a acestor stări.</li>
      </ul>
    </div>
  ),
  carteVerde: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Asigurarea obligatorie de răspundere civilă auto externă - Cartea Verde</h2>
      <p className="mb-4">
        Cartea Verde – o asigurare obligatorie pentru toţi posesorii de autovehicule care pleacă peste hotare, ce acoperă daunele provocate persoanelor terţe în urma unor accidente de circulaţie (daune materiale sau vătămări corporale).
      </p>
      <p className="mb-4">
        Asigurarea Carte Verde este corespondentul poliței de asigurare RCA atunci când circulați în afara granițelor Republicii Moldova.
      </p>
      <h3 className="text-xl font-semibold mb-2">Zonele de acoperire Carte Verde</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Zona 1: (UA) Ukraina, (BY) Belarus;</li>
        <li>Zona 2: (UA) Ukraina, (BY) Belarus, (RUS) Rusia;</li>
        <li>Zona 3: (A) Austria, (B) Belgia, (BG) Bulgaria, (CY) Cipru, (CZ) Cehia, (D) Germania, (DK) Danemarca, (E) Spania, (EST) Estonia, (F) Franţa, (FIN) Finlanda, (GB) Marea Britanie, (GR) Grecia, (H) Ungaria, (HR) Croaţia, (I) Italia, (IRL) Irlanda, (IS) Islanda, (L) Luxemburg, (LT) Lituania, (LV) Letonia, (M) Malta, (N) Norvegia, (NL) Olanda, (P) Portugalia, (PL) Polonia, (RO) România, (S) Suedia, (SK) Slovacia, (SLO) Slovenia, (CH) Elveţia, (AL) Albania, (AND) Andorra, (AZ) Azerbaijan, (BIH) Bosnia şi Herţegovina, (BY) Belarus, (IL) Israel, (IR) Iran, (MA) Maroc, (MD) Moldova, (MK) Macedonia, (MNE) Muntenegru, (RUS) Rusia, (SRB) Serbia, (TN) Tunisia, (TR) Turcia, (UA) Ukraina.</li>
      </ul>
      <p className="mb-4">
        Pentru a încheia un contract de asigurare Carte Verde trebuie îndeplinite următoarele condiții:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Autovehiculul să fie înmatriculat/supus înmatriculării în Republica Moldova;</li>
        <li>Prezentarea actelor necesare: certificat de înmatriculare a autovehiculului sau, după caz, alte acte ce atestă dreptul de posesiune asupra autovehiculului (procură, contract de locaţiune, contract de leasing, etc.).</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Recomandări</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Nu uita că fără Cartea Verde nu poţi trece de controlul vamal!</li>
        <li>Achiziționați acest document pentru a evita cheltuieli nedorite în timpul călătoriei, în caz de accident;</li>
        <li>Înainte de călătorie verificați dacă Cartea Verde este valabilă în țările în care veți călători;</li>
        <li>Manifestați prudență la alegerea birourilor de perfectare a asigurărilor obligatorii de răspundere civilă auto externă. Asigurați-vă că polița este emisă prin sistemul RCA Data automatizat și cereți inclusiv bon fiscal. Este bine de știut că, în cazul circulării cu polița Carte Verde falsă, BNAA se va îndrepta în regres împotriva șoferului vinovat pentru a recupera de la acesta daunele achitate. Mai mult, dacă șoferul a cumpărat polița falsă în cunoştință de cauză el poate fi atras la răspundere penală.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Polița de asigurare Carte Verde cuprinde următoarele informații:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Denumire document;</li>
        <li>Emisă sub autoritatea: Biroului Asigurătorilor de Autovehicule din Republica Moldova;</li>
        <li>Valabilitatea: de la – până la;</li>
        <li>Codul țării/codul asigurătorului/numărul poliţei;</li>
        <li>Numărul de înmatriculare;</li>
        <li>Categoria autovehiculului: fiecărui fel de vehicul îi este atribuit un cod; astfel: A = autoturism; B = motociclu; C = autocamion sau tractor; D = bicicletă cu motor; E = autobus sau autocar; F = remorcă; G = altele;</li>
        <li>Marca autovehiculului;</li>
        <li>Valabilitatea teritorială: țările în care este/nu este valabilă (Cartea Verde este valabilă în țările ale căror boxe nu sunt barate);</li>
        <li>Numele, prenumele și adresa asiguratului;</li>
        <li>Denumire/date de identificare asigurător;</li>
        <li>Semnătură asigurător;</li>
        <li>Note/mențiuni pentru asigurat.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Limitele de despăgubire</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Țara</th>
            <th className="border px-4 py-2">Daune corporale</th>
            <th className="border px-4 py-2">Total pentru accident</th>
            <th className="border px-4 py-2">Daune materiale</th>
            <th className="border px-4 py-2">Total pentru accident</th>
          </tr>
        </thead>
        <tbody>
          {/* Completeaza tabelul cu informatii reale */}
          <tr>
            <td className="border px-4 py-2">Exemplu</td>
            <td className="border px-4 py-2">100,000 EUR</td>
            <td className="border px-4 py-2">500,000 EUR</td>
            <td className="border px-4 py-2">100,000 EUR</td>
            <td className="border px-4 py-2">500,000 EUR</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-semibold mb-2">Istoric</h3>
      <p className="mb-4">
        Sistemul Carte Verde a fost introdus din 1 ianuarie 1953 sub egida Comisiei Economice pentru Europa din cadrul ONU și, în prezent, cuprinde 47 de țări din Europa și din jurul Mării Mediterane, precum și Rusia și Iran. Sistemul Carte Verde este administrat și condus de către Consiliul Birourilor (format din Biroul fiecărei țări participante în sistem) cu sediul la Londra.
      </p>
      <p className="mb-4">
        Republica Moldova a aderat la sistemul internațional Carte Verde în 1997, dar a început activitatea în domeniu în 2001. De asemenea, în 2010, BNAA (Biroul Național al Asigurătorilor de Autovehicule) a fost acceptat în Biroul Internațional Carte Verde, cu statut de membru cu drepturi depline.
      </p>
      <p className="mb-4">
        În Republica Moldova, asigurarea obligatorie de răspundere civila auto externă Carte Verde este reglementată prin Legea Republicii Moldova „Cu privire la asigurarea obligatorie de răspundere civilă pentru pagube produse de autovehicule” nr. 414 din 22/12/2006.
      </p>
      <h3 className="text-xl font-semibold mb-2">Sistem Informațional RCA Data</h3>
      <p className="mb-4">
        Începând cu 01.02.2013, contractele de asigurare Carte Verde se procesează doar în regim online prin intermediul Sistemului Informaţional Automatizat de Stat în domeniul asigurărilor obligatorii de răspundere civilă pentru pagube produse de autovehicule – RCA Data.
      </p>
      <p className="mb-4">
        Sarcina de bază a sistemului este încheierea centralizată a contractelor de asigurare RCA şi Carte Verde, și îmbunătățirea evidenței lor.
      </p>
      <p className="mb-4">
        Ca urmare a implementării Sistemului RCA Data sunt înregistrate progrese în ceea ce privește disciplinarea participanților profesioniști la piața asigurărilor și reducerea semnificativă a cazurilor de fraudă în domeniul respectiv.
      </p>
      <p className="mb-4">
        Răspunderea asigurătorului începe numai din momentul validării poliţei de către sistem, fapt ce permite contracararea fraudelor legate de încheierea contractelor de asigurare cu date anterioare producerii accidentelor rutiere.
      </p>
      <p className="mb-4">
        Totodată, Sistemul Informațional RCA Data permite schimbul de informaţii cu organele afacerilor interne, în scopul exercitării funcției de control privind posesia asigurării Carte Verde.
      </p>
      <p className="mb-4">
        Valabilitatea certificatului de asigurare Carte Verde poate fi verificată online la adresa web rca.cnpf.md.
      </p>
      <p className="mb-4">
        În acest context, în scopul prevenirii situațiilor litigioase în caz de survenire a riscului asigurat, Comisia Națională a Pieței Financiare atrage atenția posesorilor de autovehicule asupra necesității de încheiere a contractelor de asigurare obligatorie de răspundere civilă auto doar la sediile și punctele de vânzări autorizate ale asigurătorilor și intermediarilor în asigurări, lista cărora poate fi accesată pe pagina web a autorității de supraveghere www.cnpf.md.
      </p>
      <h3 className="text-xl font-semibold mb-2">Calculul prețului poliței Carte Verde și reducerile acordate</h3>
      <p className="mb-4">
        Costul asigurării este același la toate companiile de asigurare care prestează acest tip de asigurare. Companiile care sunt autorizate să emită asigurări Carte Verde sunt: ACORD Grup, DONARIS VIG, GRAWE CARAT Asigurări, MOLDASIG, MOLDCARGO, GENERAL Asigurări și ASTERRA Grup.
      </p>
      <p className="mb-4">
        Prima de asigurare pentru polița Carte Verde este stabilită de către autoritatea de supraveghere și NU POT FI ACORDATE REDUCERI la acest tip de asigurare. Prima de asigurare se achită anticipat şi integral pentru întreaga perioadă asigurată.
      </p>
      <p className="mb-4">
        Paşii de emitere a unei poliţe de asigurare Carte Verde, sunt relativ simpli, astfel că, la solicitarea asigurării, proprietarul autovehiculului va prezenta doar buletinul de identitate şi certificatul de înmatriculare, iar reprezentantul asigurătorului va introduce în sistem codurile de identificare a persoanei şi respectiv al autovehiculului. După bifarea parametrilor, sistemul determină prima de asigurare finală, pe care trebuie să o plătească clientul. Aceasta va fi formată din prima de asigurare de bază unică, la care se adaugă coeficienţii de risc aferenţi fiecărui asigurat.
      </p>
      <p className="mb-4">
        Costul asigurării Carte Verde depinde de:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Tipul autovehiculului (autoturisme, autocamioane, motocicluri, autovehicule destinate transportului de persoane, altele);</li>
        <li>Teritoriul de circulație (țara/țările de destinație);</li>
        <li>Perioada de valabilitate a asigurării.</li>
      </ul>
      <p className="mb-4">
        Asigurarea Carte Verde poate fi cumpărată de la reprezentanțele asigurătorilor membri BNAA autorizați să emită Carte Verde sau agenții acestora/brokeri de asigurare care încheie polița în numele asigurătorului.
      </p>
      <p className="mb-4">
        Persoanele juridice care activează în domeniul transportului internaţional de mărfuri şi pasageri, încadraţi în sistemul TIR-CARNET şi INTER-BUS, și care dețin certificatul de asigurare Carte Verde valabil pentru o perioadă de 12 luni, pot primi reduceri până la 60% din primele de asigurare la încheierea contractelor de asigurare obligatorie de răspundere civilă auto (RCA).
      </p>
      <h3 className="text-xl font-semibold mb-2">Refuzul despăgubirii</h3>
      <p className="mb-4">
        Pentru a evita situațiile neplăcute în care dvs. trebuie să suportați paguba produsă în urma unui accident peste hotare, chiar dacă dispuneți de o poliță de asigurare, este necesar să fiți informat despre cazurile când compania de asigurare are dreptul de a refuza despăgubirea, sau de a înainta acțiune de regres împotriva persoanei răspunzătoare de producerea accidentului, ceea ce înseamnă că compania de asigurări va despăgubi terța persoană, dar va avea dreptul să ceară de la dvs. toate cheltuielile suportate.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Certificatul Carte Verde emis nu corespunde teritoriului în care a avut loc accidentul;</li>
        <li>Accidentul a fost produs cu intenţie;</li>
        <li>Persoana vinovată părăsește locul accidentului;</li>
        <li>În momentul producerii accidentului, autovehiculul era condus în stare de ebrietate sau sub influenţa stupefiantelor;</li>
        <li>Persoana răspunzătoare de producerea accidentului conducea autovehiculul fără permis de conducere sau cu încălcarea regulilor privind permisul de conducere (nu corespunde categoria; a expirat valabilitatea permisului);</li>
        <li>Compania de asigurări nu a fost anunțată în decurs de 48 de ore despre producerea accidentului;</li>
        <li>Accidentul a fost produs în timpul când autorul unei infracțiuni încearcă să se sustragă de la urmărire.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Restituirea primei</h3>
      <p className="mb-4">
        Dacă asigurarea încă nu a intrat în vigoare (termenul de asigurare indicat în certificatul de asigurare nu a început), puteți solicita anularea contractului Carte Verde, iar prima de asigurare achitată vă va fi restituită în totalitate. În acest caz veți achita doar costul formularului (10-20 lei, în dependență de compania de asigurare).
      </p>
      <p className="mb-4">
        Important! Nu se admite încetarea contractului de asigurare obligatorie a răspunderii civile auto externă dacă perioada de asigurare neexpirată este mai mică de 1 lună din data înregistrării cererii, indiferent de motivele invocate de asigurat.
      </p>
      <p className="mb-4">
        Dacă asigurarea a intrat deja în vigoare , dar călătoria dvs. s-a anulat și nu mai aveți nevoie de Carte Verde, puteți solicita anularea contractului cu condiția prezentării actului confirmativ precum că nu ați părăsit hotarele țării. În acest caz se va restitui prima aferentă perioadei rămase din asigurare și veți achita suplimentar costul formularului (10-20 lei, în dependență de compania de asigurare).
      </p>
      <p className="mb-4">
        Dacă doriți să vindeți automobilul şi asigurarea Cartea Verde este încă valabilă, asigurătorul restituie prima de asigurare pentru perioada rămasă până la expirarea contractului, reţinând suma cheltuielilor de gestiune efective (25%).
      </p>
      <p className="mb-4">
        Asigurătorul este eliberat de obligaţia restituirii primelor de asigurare în cazul în care până la reziliere a efectuat deja plăţi de despăgubire sau a primit un aviz de accident în care a fost implicat autovehiculul dvs.
      </p>
      <p className="mb-4">
        În cazul schimbării numărului de înmatriculare a autovehiculului asigurat, puteți solicita modificarea contractului de răspundere civilă auto externă, cu numărul de înmatriculare vechi şi eliberarea unei poliţe noi.
      </p>
      <p className="mb-4">
        În cazul pierderii poliţei Carte Verde, se eliberează o nouă poliţă Carte Verde în locul celei pierdute cu condiția prezentării actelor corespunzătoare, costul duplicatului fiind acoperit de solicitant.
      </p>
      <h3 className="text-xl font-semibold mb-2">Carte Verde pentru autoturism înmatriculat în străinătate</h3>
      <p className="mb-4">
        Certificatul de asigurare Carte Verde se eliberează doar pentru autovehiculele înmatriculate în Republica Moldova! Dacă sunteți posesor al unui autoturism înmatriculat în străinătate, și asigurarea Carte Verde a expirat în perioada aflării dvs. pe teritoriul Republicii Moldova, va fi necesar să procurați de la punctul de control al frontierei de stat, o asigurare de frontieră.
      </p>
      <p className="mb-4">
        Prin urmare, șoferii vor cumpăra la intrarea pe teritoriul României sau al unui alt stat din Spațiul Economic European, o asigurare de frontieră pentru o perioadă de minimum 30 de zile. Asigurarea cumpărată la intrarea pe teritoriul unui stat membru al SEE va fi valabilă în toate celelalte țări componente ale acestuia.
      </p>
      <p className="mb-4">
        În ce privește circulația pe teritoriul Rusiei, Belarusului și Ucrainei, șoferii vor fi nevoiți ca la intrarea în fiecare din aceste ţări să cumpere o poliță de asigurare RCA internă.
      </p>
      <h3 className="text-xl font-semibold mb-2">Procesul de înregistrare a cazului asigurat</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Nu părăsiți locul accidentului și întreprindeți toate acţiunile posibile pentru diminuarea pagubelor produse;</li>
        <li>Înştiinţaţi imediat organele poliţiei, cele mai apropiate de locul producerii accidentului, cerând întocmirea de acte cu privire la cauzele şi împrejurările producerii accidentului şi la pagubele provocate, sau dacă legistația țării permite, întocmiți un formular de Constatare Amiabilă de accident;</li>
        <li>Important! Dacă actele cu referinţă la cazul asigurat sunt perfectate într-o limbă necunoscută indicați nota: „Nu înţeleg limba”;</li>
        <li>Prezentați fila II „Duplicat” a certificatului de asigurare Carte Verde organului de poliție sau persoanei prejudiciate;</li>
        <li>Dacă accidentul în cauză nu este primul accident cu participarea Asiguratului şi duplicatul poliţei este deja extras, este necesar să faceţi fotocopia „Originalului” şi să o transmiteţi păgubitului sau în actul care confirmă producerea cazului asigurat să se indice datele din Cartea Verde. Fila I a poliţei „Original” rămâne permanent la Asigurat;</li>
        <li>Anunțați Biroul Național de asigurare, din țara respectivă, despre producerea accidentului (adresele Birourilor Naționale sunt plasate pe versoul certificatului Carte Verde);</li>
        <li>Înștiințați timp de 48 de ore asigurătorul care a emis certificatul de asigurare Carte Verde despre producerea accidentului rutier și circumstanțele acestuia;</li>
        <li>Nu întreprindeți de sine stătător măsuri de reparare a pagubelor.</li>
      </ul>
      <p className="mb-4">
        Dacă dvs. sunteți persoana păgubită adresați-vă direct la compania de asigurări a vinovatului din ţara respectivă sau la reprezentantul de despăgubire a acelei companii din țara în care vă aflați.
      </p>
      <h3 className="text-xl font-semibold mb-2">Procedura de despăgubire pentru asigurarea Carte Verde</h3>
      <p className="mb-4">
        Cine acordă despăgubiri, pentru prejudiciile provocate, se stabileşte în felul următor:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Dacă persoana vinovată de producerea accidentului este rezidentă în ţara unde a avut loc cazul asigurat, prejudiciul va fi compensat de compania de asigurări la care este asigurată persoana vinovată de accident;</li>
        <li>Dacă persoana vinovată de producerea accidentului nu este rezidentă în ţara unde a avut loc cazul asigurat, prejudiciul va fi compensat prin intermediul Biroului Naţional al Asigurătorilor mijloacelor de transport al ţării pe teritoriul căreia a avut loc cazul asigurat.</li>
      </ul>
      <p className="mb-4">
        Plata daunei se realizează în conformitate cu normele ţării în care a avut loc accidentul.
      </p>
    </div>
  ),
};

type InsuranceType = keyof typeof insuranceContent;

const InsuranceInfoPage: React.FC = () => {
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceType>('rca');

  return (
    <>
      <ConstrainedHeaderComponent />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl font-semibold leading-6 text-gray-900 mb-8">Informații Asigurări</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`mx-2 px-4 py-2 rounded-md ${
              selectedInsurance === 'rca' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedInsurance('rca')}
          >
            RCA
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md ${
              selectedInsurance === 'casco' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedInsurance('casco')}
          >
            CASCO
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md ${
              selectedInsurance === 'carteVerde' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedInsurance('carteVerde')}
          >
            CARTE VERDE
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {insuranceContent[selectedInsurance]}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InsuranceInfoPage;