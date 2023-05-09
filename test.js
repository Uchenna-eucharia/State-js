let StateDropDown = document.getElementById('select-state');

states = [
    Abia = {
        StateName: "Abia",
        localGovernments: {
        'Aba_North': ['Eziama', 'Ogbor_hill'], 
        'Aba_South': ['Aba_Ukwu', 'Ohazu'], 
        'Arochukwu': ['Amaeke_Abam', 'Arochukwu', 'Ihechiowa', 'Isu', 'Ohafor', 'Ovukwu_Abam', 'Ututu'], 
        'Bende': ['Alayi', 'Bende', 'Igbere', 'Item', 'Itumbauzo', 'Nkpa', 'Ozui_Tem', 'Ugwueke', 'Umuhu_Ezechi', 'Umu_Menyi', 'Uzuakoli'], 
        'Ikwuano': ['Ariam_Usaka', 'Ibeku', 'Ibere', 'Isingwu', 'Nkwo_Egwu', 'Nwkoachara', 'Oboro', 'Old_Umu_Ahia', 'Oloko', 'Olo_Koro', 'Omuegwu', 'Uba_Kala', 'Umuhu', 'Umuo_Para'], 
        'Isiala_Ngwa_North': ['Ama_Asa', 'Amapu_Ntigha', 'Amasa_Ntigha', 'Ihie', 'Ngwa_Ukwu', 'Nsulu', 'Umuoha'], 'Isiala_Ngwa_South': ['Amaise', 'Amaise_Ahaba', 'Isiala_Nvosi', 'Mbutu', 'Ngwa', 'Okporo_Ahaba', 'Omoba', 'Osokwa_Nvosi', 'Ovu_Ngwa', 'Ovu_Okwu'], 'Isuikwuato': ['Achara_Uturu', 'Ezere', 'Imenyi', 'Isu_Amawu', 'Mbaugwu', 'Ogudo_Asa', 'Ohaise', 'Umun_Nekwu'], 'Obioma_Ngwa': ['Abayi', 'Ahiaba', 'Akuma_Imo', 'Ala_Ukwu', 'Ibeme', 'Mgboko', 'Mgboko_Amiri', 'Mgboko_Out_Ngwa', 'Ndiaka', 'Ntigha_Uzor'], 'Ohafia': ['Abiriba', 'Ama_Asato', 'Amangwu_Ohafia', 'Amasa', 'Amavo', 'Aro_Ngwa', 'Ebem_Ohafia', 'Isiama_Ohafia', 'Nkporo', 'Nbem_Ohafia', 'Ohafor_Ohafia', 'Oko_Aku', 'Okon_Aku_Ohafia', 'Ona_Ohafia', 'Onia_Ohafia', 'Oso_Akwa', 'Umun_Neise'], 'Osisioma_Ngwa': ['Amaitoli', 'Amasa', 'Aro_Ngwa', 'Okpu_Umuobo', 'Okupu_Umuobo', 'Oso_Okwa', 'Umunneise'], 'Ugwunagbo': ['Ugwuna_Gbo', 'Ugwu_Nagbo'], 'Ukwa_East': ['Abayi', 'Akuma_Imo', 'Ala_Ukwu', 'Azumini', 'Ikwueke', 'Ikwuorie', 'Ikwu_Orie', 'Ikwuo_Rieator', 'Obohia', 'Ohuru', 'Umuigbube_Achara_North', 'Umuigbube_Achara', 'Umuihu_Eze_11', 'Umuihu_Eze_12', 'Umuihu_Eze_13', 'Umuihueze_II'], 'Ukwa_West': ['Asa_South', 'Asa_North', 'Ipu_East', 'Ipu_South', 'Ipu_West', 'Obokwe', 'Ozar_Ukwu', 'Ozar_West'], 'Umunneochi': ['Alokp_Anta', 'Isuochi', 'Nneato', 'Umuch_Ileze'], 'Umuahia_North': ['Umuahia', 'Umukabia', 'Umuawa_Alaocha', 'Umuagu', 'Umuekwule', 'Ihite_Ude', 'Umuda_Isingwu', 'Ohuhu'], 'Umuahia_South': ['Umuopara', 'Old_Umuahia', 'Nsirimo', 'Ubakala', 'Ohiocha', 'Ohiya', 'Eziama_Ubakala', 'Nsukwe_Ubakala', 'Amakama_Olokoro', 'Ezeleke_Umuopara', 'Eluamana_Mgbedeala', 'Umuajata_Olokoro', 'Umuobia_Olokoro', 'Laguruna_Umuosu_Ubakala', 'Ekenobizi', 'Okwu_Olokoro', 'Umumba_Nsirimo', 'Umuosu_Alaocha', 'Abam_Alaocha_Ubakala', 'Umuanya_Ogbodi', 'Dim_Na_Opara', 'Umudere_Olokoro', 'Ngodo', 'Avonkwu_Olokoro', 'Umuntu_Olokoro', 'Itu_Olokoro', 'Amangwo_Olokoro', 'Umuopara_Ozara', 'Uzi_Olokoro', 'Ipupe_Alaocha_Ubakala', 'Umuokorodo', 'Agbama_Olokoro', 'Umuihe_Umuopara', 'Omaegwu', 'Alaoji_Amakama_Olokoro', 'Dikeukwu', 'UturuIsiala', 'Eluelu_Old_Umuahia', 'Erim_Nsirimo', 'Umuogo_Ubakala', 'Mgbarakuma_Ubakala', 'Umunwanwa', 'Ihenwekeala', 'Amuzu_Ubakala', 'Umutowe_Olokoro', 'Amizi-Ekpe_Olokoro']
        }
    },
    Adamawa = {
        StateName: "Adamawa",
        localGovernments: {
           'Demsa': ['Bali', 'Bille', 'Borrong', 'Demsa', 'Dong', 'Gwmba', 'Mbula'], 'Fufore': ['Daware', 'Gurin', 'Malabu', 'Mayo_Inne', 'Nyibango', 'Riba', 'Verre'], 'Ganye': ['Banarikiuso', 'Ganye', 'Gurum', 'Jaggu', 'Sugu', 'Timdore', 'Yebbi'], 'Girei': ['Gerie'], 'Gombi': ["Ga'Anda", 'Garkida', 'Guyaku', 'Lala'], 'Guyuk': ['Banjiram', 'Bobini', 'Chikila', 'Dukul', 'Dumna', 'Guyuk', 'Kola'], 'Hong': ['Daktsi', 'Dugwamba', 'Gaya', 'Hong', 'Kuliyi', 'Uba'], 'Jada': ['Danaba', 'Jada', 'Koma', 'Leko', 'Mapeo', 'Mayo_Kalaye', 'Mbulo', 'Nyibango', 'Yelli'], 'Lamurde': ['Gyawana', 'Kwah', 'Lafiya', 'Lamurde', 'Suwa', 'Waduku'], 'Madagali': ['Duhu', 'Gulak', 'Kirchinga', 'Madagali', 'Sukur'], 'Maiha': ['Belel', 'Maiga', 'Mbila', 'Pakka_Vokuna', 'Sarau'], 'Mayo_Belwa': ['Bajama', 'Binyeri', 'Mayo_Belwa', 'Mayo_Farang', 'Mayo_Lamja'], 'Michika': ['Bazza', 'Futu', 'Garta', 'Madzi', 'Michika', 'Nkafa', 'Zah'], 'Mubi_North': ['Bahuli', 'Mayo_Bani', 'Mobu_(Ruru)', 'Muchalla'], 'Numan': ['Bare', 'Numan', 'Vulpi'], 'Shelleng': ['Bakta', 'Bodwai', 'Kiri', 'Libbo_Dutse', 'Shelleng'], 'Song': ['Ditera', 'Mboi', 'Song', 'Waltadi', 'Zumo'], 'Toungo': ['Dawo', 'Gamu', 'Kini', 'Tungo'], 'Yola_South': ['Namtara', 'Yola_(Rural)'], 'Mubi_South': ['Mubi_South', 'Duvu', 'Chaba', 'Girburum', 'Gella', 'Gude', 'Kwaja', 'Lamorde', 'Yadafa', 'Mujara', 'Nassarawo', 'Nduku', 'Mugulbu'], 'Yola_North': ['Yola_North', 'Ajiya', 'Doubeli', 'Alkalawa', 'Gwadabawa', 'Karena', 'Limawa', 'Luggere', 'Yelwa', 'Sebore', 'Bole', 'Changala', 'Wuro_Yanka', 'Goduwu', 'Gongoshi']}
    },
    Akwa_Ibom = {
        StateName: 'Akwa_Ibom',
        localGovernments: {
            'Abak': ['Abak_Urban', 'Afaha_Obong', 'Ediene', 'Midim', 'Otoro'], 'Eastern_Obolo': ['Iko', 'Okoroete'], 'Eket': ['Afaha_Clan', 'Eket_Offiong_Clan', 'Idua_Clan', 'Okon_Clan'], 'Esit_Eket': ['Eke_Afaha_Clan', 'Eket_Offing_Clan'], 'Essien_Udim': ['Adiasim', 'Afaha_Clan', 'Ekpen_Yongatai_Clan', 'Ikpe_Annang', 'Odoro_Ikot', 'Okon_Clan', 'Ukana_East', 'Ukana_west_Clan'], 'Etim_Ekpo': ['Ikono', 'Obong', 'Uruk', 'Utu_Etim'], 'Etinan': ['Etinan_Urban', 'Northern_Iman', 'Southern_Iman'], 'Ibeno': ['Ibeno_Clan'], 'Ibesikpo_Asutan': ['Asutan_Epe', 'Ibesikpo'], 'Ibiono_Ibom': ['Ibiono_(Southern)', 'Ibiono_I', 'Ibiono_II', 'Ibiono_III', 'Ibiono_III_Central', 'Ikpanya'], 'Ika': ['Achan_Ika', 'Ika_Annang', 'Ito_Clan'], 'Ikono': ['Ekpene/Ediene', 'Ikono_South', 'Itak', 'Ndiya', 'Nquot'], 'Ikot_Abasi': ['Edemaya', 'Ikpa_Ibekwe', 'Ikpa_Nung_Asang', 'Ukpom_Okom', 'Ukpum_Ete'], 'Ikot_Ekpene': ['Amanyam', 'Ikot_Ekpene_Urban'], 'Ini': ['Aka_Ekpene', 'Asanting', 'Ibakesi', 'Ibiaku', 'Ikpe/Ikot', 'Itu_Mbonuso', 'Iwerre', 'Mbiabon_G._I.', 'Mbiabong_II', 'Mbiafun', 'Nkari', 'Nung_Ukem', 'Odoro_Ikpe', 'Uquok'], 'Itu': ['Ayadehe', 'East_Itam', 'Itu', 'Mbiabo', 'Oku', 'West_Itam'], 'Mbo': ['Afaha_Okpo', 'Effiat', 'Ibiaku', 'Ikpa_Ibom', 'Ikpo_Ikono', 'Ukwong'], 'Nsit_Atai': ['Eastern_Nsit'], 'Nsit_Ibom': ['Asang_Clan', 'Mbiaso_Clan'], 'Nsit_Ubium': ['Ibiakpan/Obotim_Clan', 'Itreto_Clan', 'Ndiya', 'Ubium_North', 'Ubium_south'], 'Obot_Akara': ['Ikot_Abia', 'Nto_Edino', 'Obot_Akara'], 'Okobo': ['Atabong', 'Ebughu', 'Eta', 'Ibighi', 'Odu', 'Okiuso', 'Ukwong'], 'Onna': ['Awa_Clan', 'Iquita', 'Nung_Ndem_Clan', 'Oniong_Clan'], 'Oron': ['Afaha_Okpo', 'Eyo_Abasi', 'Eyotong', 'Uya_Oro'], 'Oruk_Anam': ['Abak_/Midim', 'Ekparakwa', 'Ibesit', 'Ibesit_Nung_Ikot', 'Inen', 'Ndot', 'Nung_Ikot', 'Nung_Ita', 'Obio_Akpa'], 'Udung_Uko': ['Afaha_Okpo', 'Okpo_Clan', 'Ubodung', 'Ubodung_Clan'], 'Ukanafun': ['Northern_Afaha', 'Northern_Ukanafun', 'Southern_Afaha', 'Southern_Ukanafun'], 'Uruan': ['Northern_Uruan', 'Southern_Uruan', 'Uruan_Central'], 'Urue_Offong/Oruko': ['Afaha', 'Egughu', 'Ibighi', 'Okiuso', 'Ubodong', 'Ukwong'], 'Uyo': ['Etoi', 'Ikono', 'Offot', 'Oku'], 'Mkpat_Enin': ['Ukpum_Minya', 'Ikpa_Nkono', 'Ikpa_Ibono', 'Ibiaku']}
    },

    Anambra = {
        StateName: "Anambra",
        localGovernments: {
            'Aguata': ['Achina', 'Aguluezechukwu', 'Akpo', 'Amesi', 'Ekwulobia', 'Ezinifite', 'Igbo_Ukwu', 'Ikenga', 'Isuofia', 'Nkpologwu', 'Ora_Eri', 'Uga', 'Umuchu'], 'Anambra_East': ['Aguleri', 'Enugwu_Aguleri', 'Eziagulu_Otu', 'Igbariam', 'Nando', 'Nsugbe', 'Otuocha', 'Umuleri', 'Enugu_Otu'], 'Anambra_West': ['Ezianam', 'Ifite_Anam', 'Nzam', 'Olumbanasa', 'Oroma_Etiti', 'Umuen_Welum'], 'Anaocha': ['Adazi_Ani', 'Adazi_Enu', 'Adazi_Nnukwu', 'Agulu', 'Agulu_Uzoigbo', 'Akwaeze', 'Ichida', 'Neni', 'Nri', 'Obeledu'], 'Awka_North': ['Achalla', 'Amansea', 'Amanuke', 'Ebenebe', 'Isu_Aniocha', 'Mgbakwu', 'Ugbene', 'Ugbuenu', 'Urum'], 'Awka_South': ['Amawbia', 'Awka_Ifite', 'Ezinato', 'Isiagu', 'Mbaukwu', 'Nibo', 'Nise', 'Okpuno', 'Umuawulu'], 'Ayamelum': ['Anaku', 'Ifite_Ogwari', 'Igbakwu', 'Omasi', 'Omor', 'Umueji', 'Umuerum', 'Umumbo'], 'Dunukofia': ['Ifite_Ukpo', 'Nawgu', 'Ukpo', 'Ukwulu', 'Umudioka', 'Umunachi'], 'Ekwusigo': ['Ichi', 'Ihembosi', 'Oraifite', 'Ozubulu'], 'Idemili_North': ['Abacha', 'Abatete', 'Eziowelle', 'Ideani', 'Nkpor', 'Obosi_(Rural)', 'Ogidi_(Rural)', 'Oraukwu', 'Uke', 'Umuoji'], 'Idemili_South': ['Akwa_Etiti', 'Akwu', 'Alor', 'Nnobi', 'Nnokwa', 'Oba', 'Ojoto'], 'Ihiala': ['Amorka', 'Azia', 'Lilu', 'Ihiala', 'Isseke', 'Mbosi', 'Okija', 'Osumoghu', 'Ubulusiozor', 'Uli'], 'Njikoka': ['Abagana', 'Abba', 'Enugwu_Agidi', 'Enugwu_Ukwu', 'Nawfia', 'Nimo'], 'Nnewi_North': ['Nnewi_(Rural)'], 'Nnewi_South': ['Akwaihedi', 'Amichi', 'Azigbo', 'Ebenator', 'Ekwulu_Mili', 'Ezinifite', 'Osumenyi', 'Ukpor', 'Unubi', 'Utuh'], 'Ogbaru': ['Akili_Ogidi', 'Amiyi', 'Atani', 'Mputu', 'Obea_Gwe', 'Ochuche', 'Odekpe', 'Ogba_Kuba', 'Oguu_Aniocha', 'Ogwu_Ikpele', 'Okoili_Ozizor', 'Oshita', 'Osso_Mala', 'Umunan_Kwo', 'Umu_Uzu'], 'Orumba_North': ['Ajalli', 'Amaokpala', 'Ameatiti', 'Awa', 'Awgbu', 'Nanka', 'Ndikeli_Onwu', 'Ndiokolo', 'Ndiokpala', 'Ndiowu', 'Ndiu_Kwuenu', 'Oko', 'Okpoeze', 'Omogho', 'Ufuma'], 'Orumba_South': ['Akpu', 'Agbudu', 'Enugu_Umuonyia', 'Eziagu', 'Ezira', 'Ihite', 'Isulo', 'Nawfija', 'Ndiok_Paleze', 'Nkereh', 'Ogboji', 'Ogbunka', 'Onneh', 'Owerre_Ezukala', 'Umunze', 'Umuomaku'], 'Oyi': ['Qgbunike', 'Awkuzu', 'Nkwelle', 'Nteje', 'Umuneba', 'Umunya'], 'Onitsha_North': ['Onitsha'], 'Onitsha_South': ['Fegge']}
    },
    Bauchi = {
        StateName: "Bauchi",
        localGovernments: {
            'Alkaleri': ['Duguri', 'Gwana', 'Pali'], 'Bauchi': ['Galambi', 'Zungur'], 'Bogoro': ['Bogoro'], 'Dambam': ['Dagauda', 'Dambam', 'Jalam'], 'Darazo': ['Darazo', 'Gabarin', 'Gabchiyari', 'Konkiyel', 'Lago', 'Lanzai', 'Papa', 'Sade', 'Tauya', 'Wahu', 'Yautare'], 'Dass': ['Dass'], 'Itas/Gadau': ['Gadau'], 'Gamawa': ['Gamawa', 'Udubo'], 'Ganjuwa': ['Ganjuwa'], 'Giade': ['Giade', 'Itas'], "Jama'are": ['Dogonjeji', 'Galdimari', 'Hanafari', "Jama'are", 'Jurara'], 'Katagum': ['Azare_Rural', 'Chinade', 'Madara'], 'Kirfi': ['Kirfi'], 'Misau': ['Hardawa', 'Misau'], 'Ningi': ['Burra', 'Ningi'], 'Shira': ['Disina', 'Shira'], 'Tafawa_Balewa': ['Bula', 'Lere'], 'Toro': ['Geji', "Jama'a", 'Lame', 'Mara', 'Palama', 'Rahama', 'Rauta', 'Ribina', 'Rishi', 'Tama', 'Tilai', 'Tilden_Fulani', 'Toro', 'Wonu', 'Zalau', 'Zaranda'], 'Warji': ['Warji'], 'Zaki': ['Sakwa', 'Zaki']
        }
    },
    Bayelsa = {
        StateName: "Bayelsa",
        localGovernments: {
            'Brass': ['Brass'], 'Ekeremor': ['Ekeremor'], 'Kolokuma/Opokuma': ['Kolokumma'], 'Nembe': ['Nembe'], 'Ogbia': ['Ogbia'], 'Sagbama': ['Sagbama'], 'Southern_Ijaw': ['Kolu_Ama', 'Oporoma'], 'Yenagoa': ['Yenagoa_(Rural)']
        }
    },
    Benue = {
        StateName: "Benue",
        localGovernments: {
            'Ado': ['Agila', 'Atonkon', 'Igumale', 'Ulayi'], 'Agatu': ['Agatu'], 'Apa': ['Ochekwu'], 'Guma': ['Mbaawa', 'Mbabai', 'Mbagwen', 'Mbasaan', 'Uyiev'], 'Gwer_East': ['Ingohov', 'Njiriv', 'Raav', 'Yonov'], 'Gwer_West': ['Mbakpa'], 'Konshisha': ['Mbavaa', 'Shan_Gevtie'], 'Kwande': ['Ikurav_Ya', 'Nanev', 'Shangev_Ya', 'Turan'], 'Logo': ['Gaambe_Tiev', 'Gaambe_Ya', 'Kpav', 'Kyuran_Tev', 'Mbaterem', 'Ngenev', 'Tongov', 'Torov', 'Ugondo'], 'Ukum': ['Ucha'], 'Makurdi': ['Makurdi_(Rural)'], 'Obi': ['Igede'], 'Otukpo': ['Adoka', 'Otukpo_(Rural)', 'Ugboju'], 'Ohimini': ['Akpa', 'Oglewu', 'Onyan_Gede'], 'Oju': ['Ito', 'Uwokwu'], 'Okpokwu': ['Edumoga', 'Ichama', 'Okpoga', 'Orokam', 'Otukpa', 'Owukpa'], 'Tarka': ['Gboko_(Rural)', 'Ipav', 'Kusuv', 'Mbagen', 'Mbakor', 'Mbalagh', 'Mbatiav', 'Mbatie', 'Mbatierev', 'Mbayion', 'Shorov', 'Utur', 'Yandev'], 'Ushongo': ['Ikov', 'Mbagba', 'Mbaikyaa', 'Ushongo', 'Utange'], 'Vandeikya': ['Mbaduku', 'Mbagbera', 'Mbaka_Ange', 'Mbara', 'Mbayongo', 'Mingev', 'Tsambe', 'Ute'], 'Buruku': ['Buruku', 'Etilo', 'Mbaakura', 'Binev', 'Mbaade', 'Mbaatirkya', 'Mbaazager', 'Mbarkyongo', 'Mbatyough', 'Mbaya', 'Mbayaka', 'Shorov'], 'Gboko': ['Mbatan', 'Mbakpegh', 'Ukpekpe', 'Mbaaverakaa', 'Mbadim', 'Mbaanku', 'Igyorov'], 'Katsina_Ala': ['Katsina_Ala', 'Katsina_Ota', 'Gbor', 'Ammatu', 'Tor_Donga', 'Abaji', 'Sai', 'Harga', 'Mbaton', 'Gbise'], 'Ogbadibo': ['Otukpa', 'Orakam', 'Owukpa']
        }
    },
    Cross_River = {
        StateName: "Cross Rivers",
        localGovernments: {
            'Abi': ['Agbo', 'Ajere', 'Ebom', 'Ediba', 'Idomi', 'Igbo', 'Nkpolo'], 'Akamkpa': ['Egup_Ipa', 'Ehom', 'Erei', 'Iko_Ekpe_Rem', 'Ikpai', 'Netin', 'North_West_(Ito)', 'Oban', 'Ojuk', 'Ubang_Hara', 'Umon', 'Uyanga'], 'Bakassi': ['Atimbo_(East)', 'Atimbo_(West)', 'Iboku', 'Ikang_North', 'Ikang_South', 'Ikangu_Central', 'Ikot_Edem_Odo', 'Ikot_Naka_Nda', 'Ikot_Nakawda_(North)', 'New_Netim', 'Odot_Edion', 'Odukpani_(East)', 'Odukpani_(West)', 'Okoyong_(South)'], 'Bekwarra': ['Abuochiche', 'Afrike', 'Eastern_Yala', 'Ekajuk', 'Gabu', 'Gakem', 'Mbube', 'Nkum', 'North_Ukele', 'Ogoja_Urban', 'South_Ukele', 'Western_Yala', 'Yache'], 'Boki': ['Abawyum', 'Akpara_Bong', 'Boje', 'Eastern_Boki', 'Ikom_(Rural)', 'Nde', 'Northern_Etung', 'NTA', 'Ofutop', 'Osokom', 'Southern_Etung'], 'Obubra': ['Iyalla', 'Obubra_Urban', 'Ofat_(Adum)', 'Ofodua_(Adum)', 'Ofombo_Ngha', 'Okom', 'Osopong'], 'Obudu': ['Alege', 'Becheve', 'Bettee', 'North_Oban_Liku', 'Obudu_(Rural)', 'Okpe', 'South_Oban_Liku', 'Ugang', 'Unpe', 'Utanga', 'Utugwang'], 'Akpabuyo': ['Idundu/Anyananse', 'Atimbo_East', 'Atimbo_West', 'Ikot_Edem_Odo', 'Eneyo', 'Ikot_Nakanda', 'Ikot_Eyo', 'Ikang_North', 'Ikang_South', 'Ikang_Central'], 'Biase': ['Abanwan', 'Afono', 'Edu/Elu', 'Egbor', 'Etana', 'Ipene', 'Ibini', 'Obum', 'Umuolor', 'Urugbam']
        }
    },
    Delta = {
        StateName: "Delta",
        localGovernments: {
            'Aniocha_North': ['Ezechime', 'Idumuje', 'Odiani'], 'Aniocha_South': ['Nsukwa', 'Ogwashi_Uku', 'Ubulu'], 'Bomadi': ['Akugbene_Men', 'Tarakiri'], 'Burutu': ['Burutu_Forcados', 'Iduwuni', 'Ngbilebiri_Mein/Ogbulubiri/', 'Obatebe', 'Ogulagha', 'Operemor', 'Seimibiri', 'Toumo'], 'Ethiope_East': ['Abraka', 'Agbon', 'Isiokolo'], 'Ethiope_West': ['Jesse', 'Oghara'], 'Ika_North_East': ['Akumazi', 'Idumuesan', 'Igbodo', 'Mbiri', 'Otolokpo', 'Owa_(S)', 'Umunede', 'Ute_Obgute_Eje', 'Ute_Okpu'], 'Ika_South': ['Abavor', 'Abor_(rural)', 'Agbor_(S)', 'Owa_(S)'], 'Isoko_North': ['Ellu', 'Emevor', 'Iyede', 'Ofagbe', 'Okpe/Isoko', 'Owhe', 'Ozoro'], 'Isoko_South': ['Avoara', 'Emede', 'Enhwe', 'Igbide', 'Irr_I_II', 'Oleh_I_II', 'Olomoro', 'oyede', 'Umeh', 'Umeh/Erohwa', 'Uzere'], 'Ndokwa_East': ['Abara_Uno', 'Aboh', 'Adiai', 'Afor', 'Akarai', 'Ase', 'Ashaka', 'Beneku', 'Ibedeni', 'Ibrede', 'Igbuku', 'Inyi', 'Obikwele', 'Okpai', 'Onogbokor', 'Onuaboh', 'Onyah', 'Ossissa', 'Umuolu', 'Ushie', 'Utchi', 'Utuoko'], 'Ndokwa_West': ['Abbi', 'Emu', 'Ogume', 'Onicha_Ukwuani', 'Utagba_Ogbe', 'Utagbe_Uno'], 'Okpe': ['Okpe'], 'Oshimili_North': ['Akwukwu_Igbo', 'Ebu/Ukala_/_Illah', 'Ibusa', 'Nsukwa', 'Ogwashi_Uku', 'Oko_Okwe', 'Okpanam_/_Ugbolu', 'Ubulu'], 'Patani': ['Kabowei', 'Kumboei'], 'Sapele': ['Elume', 'Sapele_Rural/Amukpe', 'Ugborhen'], 'Udu': ['Udu'], 'Ughelli_North': ['Agbarha', 'Agbarho', 'Evwreni', 'ogor', 'Orogun', 'Owheru', 'Ughelli'], 'Ughelli_South': ['Arhavba_rien', 'Effurun_Otor', 'Eghwu', 'Okparabe', 'olomu', 'Ughiev_wen'], 'Ukwuani': ['Akoku', 'Amai', 'Ebedei', 'Eziokpor', 'Ezionum', 'Obiarumu', 'Umuebu', 'Umukwata', 'Umutu'], 'Uvwie': ['Uvwie'], 'Warri_North': ['Bennin_River', 'Egbeoma', 'Koko'], 'Warri_Southwest': ['Ugbo_Rodo', 'Ogbe_Ijoh'], 'Warri_South': ['Gbara_Matu', 'Ode_Itsekiri']
        }
    },
    Ebonyi = {
        StateName: "Ebonyi",
        localGovernments: {
            'Afikpo_North': ['Afikpo/Ehugbo'], 'Afikpo_South': ['Amasiri', 'Igli', 'Edda_Land'], 'Ebonyi': ['Amachi', 'Amagu', 'Edda', 'Ishieke', 'Izzi_Unuhu', 'Nkaleke_Achara', 'Nkaleke_Echara', 'Okpui_Tumo'], 'Ezza_North': ['Achara_Ezza', 'AmaEzekwe', 'Amana', 'Amawula', 'Amazu', 'Ameka', 'Amuda', 'Amudo', 'Ekka', 'Ezzama', 'Ikwato_Idembia', 'Inyere', 'Nkomoro', 'Nsokara', 'Okffia', 'Oriuozor', 'Ugboji', 'Umue_Ezeoka', 'Umueze_Koha', 'Umunw_Agu', 'Umuoga_Hara'], '8Ezza_North': ['Amagu'], 'Ikwo': ['Akpan_Wudele', 'Amain_Yima', 'Echia_Like', 'Eka_Awoke', 'Enyibichiri_Alike', 'Etim_Ekpuitumo', 'Igbudu', 'Inyimagu', 'Ndiagu_Achara', 'Ndiagu_Amagu', 'Ndifu_Alike', 'Ndufu_Achara', 'Ndufu_Amagu', 'Noyo_Alike'], 'Ishielu': ['Agba', 'Amazu', 'Azunyaba', 'Ebeagu_Aut._Com.', 'Egge_Egde', 'Emuhu_Ali', 'Ezillo', 'Ezzagu', 'Iyonu', 'Nkalagu', 'Nkalaha', 'Ntezi', 'Okpoto'], 'Izzi': ['Agbaja', 'Ezz_Inyi_Magu', 'Igbeagu', 'Mgbala_Ukwu', 'Ndieze'], 'Ohaozra': ['Akaeze', 'Ishiagu', 'Okoposi', 'Uburu', 'Ugwu_Langwu'], 'Ohaukwu': ['Amoffia_Mgbo', 'Effium', 'Ekwashi_Mgbo', 'Ezzamgbo', 'Okposhi_Mgbo', 'Okposi_Eheku', 'Ukwuagba_Mgbo', 'Umuezeaka_Ogbo', 'Umugudu', 'Umuogudu_Oshia'], 'Onicha': ['Abaomege', 'Isu', 'Onicha', 'Oshiri', 'Ukawu']
        }
    },
    Edo = {
        StateName: "Edo",
        localGovernments: {
            'Akoko_Edo': ['Akuku/Ewan', 'Central_Akoko/North', 'Igarra/East_Akoko', 'Ikpeshi_Egbegbere/Atje', 'Kakumo_Anyanran', 'North_Akoko', 'North_East_Akoko', 'Okpe_Ijaja_Oloma', 'Okukusho/Central', 'Ososo'], 'Egor': ['Use'], 'Esan_Central': ['Ebelle', 'Ewossa', 'Ewu', 'Igueben', 'Irrua', 'Opoji', 'Ugbegun'], 'Esan_North_East': ['Uromi', 'Uzea'], 'Esan_South_East': ['Emu', 'Equare_Ewatto', 'Ewohimi', 'Ifeku', 'Ilushi', 'Inyenlen', 'ohordua', 'Okhu_Essan', 'Onog_Holo', 'Oria', 'Orowa', 'Ubiaja', 'Udo', 'Uroh'], 'Esan_West': ['Eghoro', 'Ekpoma', 'Idoa', 'Naoka', 'Ogwa', 'Ujiogba', 'Ukhun', 'Urohi'], 'Etsako_Central': ['Ekperi', 'Fugar_Avianwu', 'Okpekpe', 'Okpella', 'South_Uneme', 'Three_Ibies'], 'Etsako_East': ['Weppa_Wano'], 'Etsako_West': ['Auchi', 'Aviele', 'Awain', 'Jagbe', 'South_Ibie', 'Uzairue_Jattu'], 'Igueben': ['Amahor', 'Ekpon', 'Ugun'], 'Ikpoba_Okha': ['Ogbeson', 'Okha/Ologbo'], 'Oredo': ['Ogbe'], 'Orhionmwon': ['Aibiokunla', 'Igbanke', 'Oloten', 'Ugboko', 'Ugu', 'Urho_Nigbe'], 'Ovia_North_East': ['Adolor', 'Iguoshodin', 'Isiuwa', 'Kokhuo', 'Oduna', 'Ofunm_Wengbe', 'Oghede', 'Okada', 'Oluku', 'Uhen', 'Uhiere', 'Utoka'], 'Ovia_South_Eest': ['Iguoba_Zuwa', 'Nikoro_Gha', 'Ofunama', 'Ora', 'Siluko', 'Udo', 'Ugbogue', 'Umaza', 'Usen'], 'Owan_East': ['Emai', 'Igue', 'Ihievbe', 'Ikao', 'Ivbi_Mion', 'Ive_Ada_Obi', 'Otuo', 'Uokha'], 'Owan_West': ['Iuleha', 'Ora', 'Ozalla'], 'Uhunmwonde': ['Egbede', 'Ehor', 'Igieduma', 'Irhue', 'Isi_North', 'Isi_South', 'Uhi', 'Umagbae_North', 'Umagbae_South']
        }
    },
    Ekiti = {
        StateName: "Ekiti",
        localGovernments: {
            'Ado_Ekiti': ['Ado_Ekiti', 'Kajola'], 'Efon': ['Efon_Alaaye'], 'Ekiti_South_West': ['Isinbode_Ekiti', 'Omuo_Ekiti_(Rural)'], 'Ekiti_West': ['Igbemo', 'Igede', 'Iyin'], 'Emure': ['Emure'], 'Gbonyin': ['Agbado_Ekiti', 'Aisegbe_Ekiti', 'Egbe_Ekiti', 'Ijan_Ekiti', 'Iluomuba_Ekiti'], 'Ido_Osi': ['Akufo/Idigba/Araromi', 'Ido', 'Ido_Ekiti', 'Ifaki', 'Omi_Adio', 'Orin_Ekiti'], 'Ijero': ['Ayegunle_Ekiti', 'Ijero_Ekiti', 'Ikoro', 'Iloro_Ekiti', 'Ipoti_Ekiti', 'Odo_Owo'], 'Ikere': ['Agama', 'Ikere_Ekiti(Rural)'], 'Ikole': ['Ijesa_Isu', 'Ikole', 'Oke_Ako'], 'Ilejemeje': ['Erinmope', 'Iye', 'Otun_Ekiti'], 'Irepodun/Ifelodun': ['Igbara_Odo_Ekiti', 'Ilawe', 'Ogotun'], 'Ise/Orun': ['Ise/Orun'], 'Moba': ['Aramoko', 'Erinjiyan', 'Okemesi'], 'Oye': ['Ayede', 'Ayegbaju', 'Imesi_Ekiti', 'Ode_Ekiti', 'Oye']  
        }
    },
    Enugu = {
        StateName: "Enugu",
        localGovernments: {
            'Aninri': ['Mpu', 'Ndeaboh', 'Nenwe', 'Odume', 'Okpanku'], 'Awgu': ['Agbogugu', 'Agbudu_Uga', 'Amoli', 'Awgu', 'Awgunta', 'Ezere', 'Ihe', 'Isu_Awa', 'Ituku', 'Maku', 'Mgbidi', 'Mgbowo', 'Nkem', 'Nnen_wenta', 'Obeagu', 'Ogbaku', 'Ogugu', 'Oweli', 'Ugbo', 'Ugwu_Eme'], 'Enugu_East': ['Nike', 'Ogwogo'], 'Enugu_North': ['Oguli'], 'Enugu_South': ['Akuke', 'Amechi', 'Obeagu', 'Ugwuaji'], 'Ezeagu': ['Agba_Umana', 'Aguobu_owa', 'Aguobu_Umuaji', 'Aguobu_Umumba', 'Akama_Oghe', 'Amakwo_Oghe', 'Amansi_Odo', 'Awha_Imezi', 'Awha_Ndiagu', 'Iwollo_Imezi', 'Neke', 'Obelagu_Umana', 'Obunofia_Ndiagu', 'Obunofia_Ndiuno', 'Okpo_Gho', 'Olo', 'Owa', 'Oyofo', 'Umumba_Ndiagu'], 'Igbo_Etiti': ['Aku', 'Diogbe', 'Ekwegbe', 'Ikolo', 'Ochima', 'Ohebe/Ohodo', 'Onyohor', 'Ozalla', 'Udueme', 'Ukehe'], 'Igbo_Eze_North': ['Ezzodo', 'Ibagwa_Aka', 'Umu_Itodo', 'Umuozzi'], 'Igbo_Eze_South': ['Alor_Agu', 'Iheaka', 'Iheakpu_Awka', 'Itchi', 'Nkalagu/Obukpa', 'Ovoko', 'Uhuna_Owerre'], 'Isi_Uzo': ['Eha_Amufu', 'Ikem', 'Mbu_Amon', 'Neke', 'Umuero'], 'Nkanu_East': ['Amagunze', 'Amechi_Idodo', 'Nara', 'Nkerefi', 'Nomeh', 'Ogbahu', 'Oruku', 'Owo', 'Ugbawka'], 'Nkanu_West': ['Agbaani', 'Akagbe_Ugwsu', 'Akagbe_Amodu', 'Amuri', 'Obe', 'Obinagu/Uwani/Akpu_ugo', 'Obuno', 'Ogonogeji_Ndiagu', 'Ogonogeji_Ndiuna', 'Ozalla'], 'Nsukka': ['Alora_Uno', 'Anuka', 'Edem', 'Eha_Alu_Mona', 'Eha_Ndiagu', 'fe_Oballa', 'Ibagwa_Agu', 'Ibagwa_Ani', 'Lejja', 'Nsukka_(Rural)', 'obimo', 'Obukpa', 'Okpal_Igbo', 'Okpuje', 'Okutu', 'Opi'], 'Oji_River': ['Achi', 'Akpugeze', 'Awlaw', 'Inyi', 'Ojo_River', 'Ugwuoba'], 'Udenu': ['Amalla', 'Ezimo', 'Imilike', 'Obollo_Afor', 'Obollo_Eke', 'Obollo_Etti', 'Ogbodu_Aba', 'Orba', 'Udunedem'], 'Udi': ['Abia', 'Abor', 'Affa', 'Agbudu', 'Akpakwume', 'Amokwe', 'Ebe', 'Egede', 'Eke', 'Nachi', 'Ngwo', 'Nsude', 'Nzue', 'Obinagu', 'Obioma', 'Oghu', 'Okpatu', 'Owhum', 'Udi', 'Ukana', 'Umuabi', 'Umuaga', 'Umulumgbe', 'Umuoka'], 'Uzo_Uwani': ['Abbi', 'Adaba', 'Adani', 'Akpugo', 'Asaba', 'Igga', 'Nimbo', 'Nkpologu', 'Nkume', 'Nrobo', 'Ogurugu', 'Ojor', 'Ugbene', 'Ukpata', 'Umulokpa', 'Uvuru']
        }
    },
    Gombe = {
        StateName: "Gombe",
        localGovernments: {
            'Akko': ['Gona', 'Kumo', 'Pindiga'], 'Balanga': ['Balanga', 'Bambam', 'Bangu', 'Cham_mwona', 'Chum_Kindiyo', 'Daduya_Hill', 'Dala_Waja', 'Degri', 'Dong', 'Gasi', 'Gelengu', 'Jessu', 'Kulani', 'Nyuwar', 'Refele', 'Reme', 'Sikkam', 'Swa', 'Talasse', 'Wala_longuda', 'Wala_waja'], 'Billiri': ['Billiri_tangale'], 'Dukku': ['Dukku', 'Gombe_abba', 'Hashidu'], 'Funakaye': ['Ashaka', 'Bajoga'], 'Gombe': ['Gombe', 'Gombe(Rural)'], 'Kaltungo': ['Awak', 'B/kaltin', 'Baule', 'Kaltungo_East', 'Kaltungo_West', 'Kamo', 'Tungo', 'Ture', 'Wange', 'Yiri'], 'Kwami': ['Kwami', 'Malam_sidi'], 'Nafada': ['Nafada'], 'Shongom': ['Bangunji', 'Burak', 'Filiya', 'Gundale', 'Gwandum', 'Kushi', 'Shongom'], 'Yamaltu_Deba': ['Deba', 'Jara', 'Yamaltu']
        }
    },
    Imo = {
        StateName: "Imo",
        localGovernments: {
            'Aboh_Mbaise': ['Amuzu', 'Avuru', 'Enyio_Gugu', 'Lorji', 'Mbutu', 'Nguru_Ahiato', 'Nguru_Nwankwo', 'Nguru_Nweke', 'Okwuato'], 'Ahiazu_Mbaise': ['Akabor', 'Ekwereazu_Town', 'Ihitte_Afor', 'Lude/Nnara_Mbia', 'Mkpam', 'Obodoahiara', 'Obodo_Ujichi', 'Obohia', 'Ogbe', 'Ogwuama/Amuzi', 'Opara_Nadim', 'Oru_Ahiara', 'Otulu/Aguneze', 'Umuo_Kirika'], 'Ehime_Mbano': ['Agbaja', 'Ehime', 'Nsu', 'Nzerem/Ikpem', 'Umualumaku/Umuihim', 'Umueze_I', 'Umueze_ii', 'Umue_Zeala', 'Umukabai', 'Umun_Akanu', 'Umunumo'], 'Ezinithitte': ['Akpodim', 'Amaumara', 'Azuzuahia_Eziudo', 'Ife', 'Itu', 'Obizi', 'Okpofe', 'Onicha', 'Owagia_Eziudo', 'Udo'], 'Ideato_North': ['Akokwa', 'Isiokpo', 'Akpulu', 'Obodo_Ukwu', 'Osina', 'Umua_Laoma', 'Uralla', 'Uzil'], 'Ideato_South': ['Amnator', 'Awa_Izuogu', 'Dikenafai', 'Isiekenesi', 'Ndiuche_Izuogu', 'Ntueke', 'Ubiohia', 'Ugbelle', 'Umuakam/Umuago', 'Umuchima', 'Umueshi', 'Umunna_Isiaku', 'Umuobom'], 'Ihitte_Uboma': ['Abuke', 'Amainyi', 'Amakoha', 'Ato_Werem', 'Awuchi_Numo', 'Ezimba', 'Ikper_Ejere', 'Onicha_Uboma', 'Umue_Zegwu', 'Umuihi', 'Umuoma'], 'Ikeduru': ['Akabo/Amatta', 'Amaimo', 'Amakohia', 'Atta', 'Avuvu', 'Eziama_Ikeduru', 'Ihuo_Dimeze', 'Inyishi', 'Ngogu/Ikem_Bala', 'Ugri_Ike/Okwu', 'Umudim', 'Uzoagba'], 'Isiala_Mbano': ['Amaraku', 'Amauzari', 'Anara', 'Ibeme', 'Nneto_Nwaefor', 'Obollo', 'Ogbor', 'Oka', 'Osu_Ama', 'Osu_Owerre', 'Uguri', 'Umuduru', 'Umunkwo', 'Umuosu'], 'Isu': ['Aman_Dugba', 'Amurie_Amanze', 'EKWE', 'Isu_Njaba', 'Umuno_Ugba'], 'Mbaitoli': ['Afara', 'Eziama_Obiato', 'Ifakala', 'Mbieri', 'Ogbaku', 'Ogwa', 'Orodo', 'Ubomiri', 'Umunoha'], 'Ngor_Okpala': ['Agala', 'Amala/Alulu/Oburu', 'Egbelu/Obube', 'Elelem', 'Eziama', 'Ngor/Ihite/Umu', 'Ntu', 'Obiangwu/Logara', 'Obib_Ezena', 'Obike', 'Ohekelem/Nnorie', 'Ozuzu'], 'Njaba': ['Amucha', 'Atta', 'Okwudor', 'Umuaka'], 'Nkwere': ['Amaok_Para', 'Eziama_Obaire', 'Nkwerre', 'Owerre_Nkw_Orji', 'Umun_Wala'], 'Nwangele': ['Abaja', 'Abba', 'Amaigbo', 'Isu', 'Umuozu'], 'Obowu': ['Alike_Obowu', 'Amuzi_Obowu', 'Avutu', 'Ikwuato', 'Okena_Logha', 'Umuariam/Achara', 'Umungwa'], 'Oguta': ['Awa', 'Egguoma', 'Egwe', 'Ezi_Orsu', 'Izombe', 'Mgbelle', 'Nkwesi', 'Nnebu_Kwu', 'Orsu_Obodo'], 'Ohaji_Egbema': ['Assa/Obile', 'Awara/Ikweraede', 'Egbema', 'Mgbirichi', 'Nwari_Agwa', 'Obudi_Agwa', 'Ohoba', 'Umuapu', 'Umuo_Kanne'], 'Okigwe': ['Amuro', 'Ihube', 'Okigwe_(Rural)', 'Otan_Chara', 'Otanzu', 'Umulolo'], 'Orlu': ['Amaifeke', 'Amaike', 'Eziachi', 'Ihioma/Ebenese', 'Ihitte_Owerre', 'Mgbee', 'Obibi_Ochasi', 'Ogberuru', 'Okporo', 'Orlu_(Rural)', 'Owerre_Ebeiri', 'Umudioka', 'Umuna', 'Umuowa', 'Umutanze', 'Umuzike'], 'Orsu': ['Amaruru/Ebenasaa', 'Assa_Ubirielem', 'Awo_Idemili', 'Ebenator', 'Eziawa', 'Ihitte_Nansa', 'Orsu_Ihite_Ukwu', 'Umuhu_Okabia'], 'Oru_East': ['Akatta', 'Akuma/Amagu', 'Amiri', 'Eziawo_ll', 'Eziawo_1', 'Ofekata_ll', 'Ofekata_1', 'Omuma'], 'Oru_west': ['Aji', 'Amaofuo', 'Eleh', 'Ibi_Asoebe', 'Mgbidi', 'Nempi', 'Ohakpu', 'Otulu', 'Ozara', 'Ubulu'], 'Owerri_North': ['Egbu', 'Emekuku', 'Emii', 'Ihite/Ogada/Oha', 'Naze', 'Obibi_Usratta', 'Orji_Aut'], 'Owerri_West': ['Avu/Umuguma', 'Ihiagwa', 'Nekede', 'Obinze', 'Oforola', 'Okolochi/Eziobodo', 'Okuku_(Obogwu)', 'Umunwoha'], 'Unuino': ['Okwe', 'Okwelle', 'Umuduru', 'Umuna']
        }
    },
    Jigawa = {
        StateName: "Jigawa",
        localGovernments: {
            'Babura': ['Babur'], 'Birnin_Kudu': ['Birnin_Kudu'], 'Buji': ['Buji'], 'Dutse': ['Dutse(Rural)'], 'Gagarawa': ['Gagarawa'], 'Garki': ['Garki'], 'Gumel': ['Danzomo', 'Gumel'], 'Guri': ['Guri'], 'Gwaram': ['Gwaram'], 'Gwiwa': ['Gwiwa'], 'Hadejia': ['Hadejia(Rural)'], 'Jahun': ['Aujara', 'Jahun'], 'Kafin_Hausa': ['Bulangu', 'Kafin_Hausa'], 'Kaugama': ['Kaugama'], 'Kazaure': ['Kazaure'], 'Kiri_Kasama': ['Kiri_Kasamma'], 'Kiyawa': ['Kiyawa'], 'Maigatari': ['Maigatari'], 'Mallam_Madori': ['Mallam_Madori'], 'Miga': ['Miga'], 'Ringim': ['Ringim'], 'Roni': ['Amaryawa', 'Roni'], 'Sule_Tankarkar': ['Sule_Tankar_Kar'], 'Taura': ['Taura'], 'Yankwashi': ['Yankwashi']
        }
    },
    Kaduna = {
        StateName: "Kaduna",
        localGovernments: {
          'Birnin_Gwari': ['Birnin_Gwari', 'Dogon_Dawa', 'Gayam', 'Kakangi', 'Kazage', 'Kungi', 'Kutemeshi', 'Kuyello', 'Maganda', 'Randagi', 'Saulawa', 'Tabanni'], 'Chikun': ['Chikun', 'Gwagwada'], 'Giwa': ['Fatika', 'Giwa/Shika'], 'Igabi': ['Igabi', 'Riga_Chikun', 'Rigasa'], 'Ikara': ['Ikara', 'Paki'], 'Jaba': ['Ankung', 'Kwoi', 'Nok/New_Nok'], "Jema'a": ['Amere', 'Anguwar_Fari', 'Bakin_Kogi', 'Bedde', 'Dangoma', 'Gidan_Waya', 'Godogodo', 'Jagindi', 'Jagindi_Tasha', 'Jibin', 'Kagoma/Asso', 'Kara', 'Kpadam', 'Manyii', 'Sonje', 'Takau', 'Unguwar_Baki', 'Zikpak', 'Atuku'], 'Kachia': ['Ankwa', 'Awon', 'Bishini', 'Doka', 'Kachia', 'Kurmin_Mazuga', 'Sabon_Sarki'], 'Kagarko': ['Akote', 'Chakwama', 'Dogon_Kurmin', 'Iddah', 'Janjala', 'Jere', 'Kagarko', 'Kaguni', 'Katuga', 'Kenyi', 'Kubacha', 'Kurmin_Dangana', 'Kushe', 'Shadalafya'], 'Kajuru': ['Kajuru', 'Kufana'], 'Kaura': ['Biniki', 'Bondong', 'Fada', 'Fada_Ciki_Gari', 'Fadan_Attakar', 'Fadan_Takad', 'Garaji', 'Gizagwai', 'Kadarko', 'Kajim', 'Kara', 'Kpak', 'Kukum_Daji', 'Kukum_Gida', 'Malagum_(Zali)', 'Manchok', 'Matuak', 'Mifi', 'Tafan', 'Tsonjei', 'Zankan'], 'Kauru': ['Chawai', 'Geshere', 'Kauru'], 'Kubau': ['Anchau', 'Kubau'], 'Kudan': ['Doka', 'Hunkuyi', 'Kauran_Waki', 'Kudan', 'L.Ikoro'], 'Lere': ['Garu', 'Kadaru', 'Lere'], 'Makarfi': ['Makarfi'], 'Sabon_Gari': ['Basawa', 'Sabon_Gari(Rural)', 'Samaru'], 'Sanga': ['Aboro', 'Amar', 'Ambel', 'Ancha', 'Ayu', 'Bokana', 'Fadan_Karshi', 'Fadan_Ninzo', 'Gunkok', 'Gwantu', 'Hatteh', 'Kwassu', 'Mayir', 'Randa', 'Tari', 'Ung/Sarki', 'Wasa'], 'Soba': ['Maigana', 'Soba'], 'Zangon_Kataf': ['Abet', 'Afana', 'Ampaga', 'Anchuna', 'Bafoi_Gora(Kanai_Bafoi)', 'Fadan_Kaje', 'Fadiya', 'Farman', 'Mazaki(Gidan_Zaki)', 'Gora', 'Jankasa', 'Kabam', 'Kamuru', 'Kamurum', 'Kangun', 'Kibori', 'Kurmin_Bi', 'Kwakhwu', 'Ladduga', 'Mabushi', 'Madakiya(Batadon)', 'Taligan(Magamiya)', 'Manyii_Aghyui', 'Marsa', 'Tsoriyang', 'Tudun_Wada', 'Unguwan_Rimi(Zantarakpat)', 'Unguwar_Gaiya', 'Unguwar_Rohogo', 'Zagom', 'Zaman_Dabo', 'Zangon_Kataf', 'Zonkwa', 'Zonzon', 'Ziturung']  
        }
    },
    Kano = {
        StateName: "Kano",
        localGovernments: {
            'Ajingi': ['Ajingi'], 'Bagwai': ['Bagwai'], 'Bebeji': ['Bebeji'], 'Bichi': ['Bichi'], 'Bunkure': ['Bunkure'], 'Dala': ['Dala(Rural)'], 'Danbatta': ['Danbatta'], 'Dawakin_Kudu': ['Dawaki'], 'Dawakin_Tofa': ['Dawakin_Tofa'], 'Doguwa': ['Doguwa'], 'Fagge': ['Fagge/Waje'], 'Gabasawa': ['Gabasawa'], 'Garko': ['Garko'], 'Garun_Mallam': ['Garun_Malam'], 'Gaya': ['Gaya'], 'Gezawa': ['Gezawa'], 'Gwarzo': ['Gwarzo'], 'Kabo': ['Kabo'], 'Karaye': ['Karaya'], 'Kibiya': ['Kibiya'], 'Kiru': ['Kiru'], 'Kumbotso': ['Kumbotso'], 'Kunchi': ['Kunchi'], 'Kura': ['Kura'], 'Madobi': ['Madobi'], 'Makoda': ['Makoda'], 'Minjibir': ['Minjibir'], 'Rano': ['Rano'], 'Rimin_Gado': ['Rimin_Gado'], 'Rogo': ['Rogo'], 'Shanono': ['Shanono'], 'Sumaila': ['Sumaila'], 'Takai': ['Takai'], 'Tarauni': ['Tarauni'], 'Tofa': ['Tofa'], 'Tsanyawa': ['Tsanyawa'], 'Tudun_Wada': ['Tudun_Wada'], 'Ungogo': ['Ungogo'], 'Warawa': ['Warawa'], 'Wudil': ['Wudil']
        }
    },
    Katsina = {
        StateName: "Katsina",
        localGovernments: {
            'Bakori': ['Bakori'], 'Batagarawa': ['Bata_Garawa'], 'Batsari': ['Batsari'], 'Baure': ['Baure'], 'Bindawa': ['Bindawa'], 'Charanchi': ['Charanchi'], 'Dan_Musa': ['Danmusa'], 'Dandume': ['Dandume'], 'Danja': ['Danja'], 'Daura': ['Daura'], 'Dutsi': ['Dutsi'], 'Dutsin_Ma': ['Dutsi_Ma'], 'Faskari': ['Faskari'], 'Funtua': ['Funtua(Rural)'], 'Ingawa': ['Ingawa'], 'Jibiya': ['Daddara', 'Jibiya'], 'Kafur': ['Kafur'], 'Kaita': ['Kaita'], 'Kankara': ['Kankara'], 'Kankia': ['Kankiya'], 'Katsina': ['Katsina(Rural)'], 'Kurfi': ['Kurfi'], 'Kusada': ['Kusada'], 'Mai_Adua': ['Mai_Adua'], 'Malumfashi': ['Malumfashi'], 'Mani': ['Mani'], 'Mashi': ['Mashi'], 'Matazu': ['Matazu'], 'Musawa': ['Musawa'], 'Rimi': ['Rimi'], 'Sabuwa': ['Sabuwa'], 'Safana': ['Safana'], 'Sandamu': ['Sandamu'], 'Zango': ['Zango']
        }
    },
    Kebbi = {
        StateName: "Kebbi",
        localGovernments: {
            'Aleiro': ['Alero', 'Sabiyel'], 'Arewa_Dandi': ['kangiwa', 'yeldu'], 'Argungu': ['Argungu(Rural)', 'Gulma', 'Lailaba'], 'Augie': ['Augie', 'Bayawa'], 'Bagudo': ['Bagudo', 'Illo', 'kaoje', 'Zagga'], 'Birnin_Kebbi': ['Birnin_Kebbi'], 'Bunza': ['Bunza', 'Raha', 'Zogirma'], 'Dandi': ['Kamba'], 'Danko_Wasagu': ['Danko', 'Wasagu'], 'Fakai': ['Fakai'], 'Gwandu': ['Dalijan', 'Gwandu', 'Kambaza'], 'Jega': ['Jega', 'Kimba'], 'Kalgo': ['kalgo', 'Kuka'], 'Koko_Besse': ['Koko'], 'Maiyama': ['Maiyama'], 'Ngaski': ['Birnin_Yauri', 'Ngaski'], 'Sakaba': ['Sakaba'], 'Shanga': ['Kwanji', 'Shanga'], 'Suru': ['Bakuwai', 'Dakin_Gari', 'Giro'], 'Yauri': ['Gungun', 'Yelwa'], 'Zuru': ['Bedi', 'Dabai', 'Isgogo/Dago', 'Manga_Ushe', 'Rafin_Zuru', 'Rikoto']
        }
    },
    Kogi = {
        StateName: "Kogi",
        localGovernments: {
            'Ajaokuta': ['Ajaokuta', 'Ebiya', 'Egayin'], 'Ankpa': ['Ankpa', 'Enjema', 'Ojoku'], 'Bassa': ['Ahutara', 'Akakana', 'Akishamishi', 'Akubasisi', 'Amo', 'Buhit', 'Buji', 'Eforo', 'Gboloko', 'Ikende', 'Jere', 'Kakkek', 'Kishika', 'Kpala', 'Kwall', 'Mafara', 'Miango', 'Mozum', 'Odeyyi', 'Ozonogulo'], 'Dekina': ['Birdu', 'Dekina', 'Okura_Egume'], 'Ibaji': ['Onyedge'], 'Idah': ['Idah'], 'Igalamela_Odolu': ['Adoru', 'Oforachi', 'Ofulko'], 'Ijumu': ['Ijumu'], 'Kabba_Bunu': ['Bunu', 'Kabba'], 'Kogi': ['Koton_Karifi'], 'Lokoja': ['Kakanda', 'Kupa', 'Lokoja_Rural', 'Oworo'], 'Ofu': ['Gwalawo', 'Itobe', 'Ogwa', 'Ugwo_Lawo'], 'Ogori_Magongo': ['Ogori/Magongo'], 'Okehi': ['Eika', 'Ihima'], 'Okene': ['Okene', 'Okengwen'], 'Olamaboro': ['Imani', 'Ogodu', 'Okpo'], 'Omala': ['Abejukolo', 'Ife', 'Ogodu'], 'Yagba_East': ['Yagba_North_East', 'Yagba_South_east'], 'Yagba_West': ['West_Yagba']
        }
    },
    Kwara = {
        StateName: "Kwara",
        localGovernments: {
            'Asa': ['Afon', 'Onire', 'Owode'], 'Baruten': ['Gwanara', 'Ilesha', 'Okuta', 'Yashi_Kera'], 'Edu': ['Lafiagi', 'Shonga', 'Tsaragi'], 'Ekiti': ['Obo_Eruku', 'Osi'], 'Ifelodun': ['Agunjin_Ora', 'Ekoende', 'Iba', 'Idofin', 'Igbaja', 'Ikirun', 'Ile_Ire', 'Obagun', 'Oke_Ode_ilorin_south', 'Omupo', 'Oro_ago', 'Otan_Aiye_Gaaju', 'Share'], 'Ilorin_East': ['Iponrin'], 'Ilorin_South': ['Gaa_Akanbi'], 'Ilorin_West': ['Ilorin(rural)'], 'Irepodun': ['Ajase', 'Erin', 'Esie_Ijan', 'Ilobu', 'Omuaran', 'Oro'], 'Isin': ['Isin', 'Oko_Ola'], 'Kaiama': ['Kaiama'], 'Moro': ['Ejidon_Gari', 'Lanwa', 'Malete', 'Oloru', 'Paiye'], 'Offa': ['Offa'], 'Oke_Ero': ['Ekan_Meje', 'Idofin', 'Ilofa/Odo_Owa'], 'Oyun': ['Odo_Ogun', 'Oke_Ogun'], 'Pategi': ['Kpada', 'Lade', 'Pategi']
        }
    },
    Lagos = {
        StateName: "Lagos",
        localGovernments: {
            'Ajeromi_Ifelodun': ['Ajeromi'], 'Amuwo_Odofin': ['Amuwo_odofin', 'Trade_fair_complex'], 'Badagry': ['Badagry'], 'Epe': ['Agbowa', 'Ejinrin', 'Epe', 'Erodo'], 'Ibeju_Lekki': ['Ibeju', 'Lekki'], 'Ikorodu': ['Ikorodu_rural', 'Irepodun'], 'Ojo': ['Ajangbadi_Afromedia', 'Ajangbadi_Ikemba_house', 'Alaba', 'Iba_town_new_site', 'Igbede', 'Igbo_Elerin', 'Ilemba_Awori', 'Ilogbo', 'Ira', 'Ojo', 'Okokomaiko', 'Olojo', 'Shibiri_Ekune']
        }
    },
    Nasarawa = {
        StateName: "Nasarawa",
        localGovernments: {
            'Akwanga': ['Ancio_Babba', 'Andaha', 'Angwan_Zaria', 'Anjida', 'Boher', 'Gudi', 'Gwanje', "Nigha'an", 'Nunku'], 'Awe': ['Awe', 'Azaara', 'Tunga'], 'Doma': ['Agwashi', 'Alagyy', 'Doka', 'Doma', 'Gidanrai'], 'Karu': ['Gitata', 'Karshi', 'Karu', 'Uke'], 'Keana': ['Aloshi', 'Giza', 'Kadarko', 'Keana'], 'Keffi': ['Keffi(Rural)'], 'Kokona': ['Kokona'], 'Lafia': ['Assakio', 'Barikin_Abdullahi', 'Lafia(Rural)'], 'Nasarawa': ['Loko', 'Nasarawa', 'Udege'], 'Eggon': ['Alongani', 'Mada_Station', 'Umme'], 'Obi': ['Obi', 'Zhemegli'], 'Toto': ['Gada', 'Toto', 'Umaisha'], 'Wamba': ['Mama', 'Wamba']
        }
    },
    Niger = {
        StateName: "Niger",
        localGovernments: {
            'Agaie': ['Kintako', 'Kintifi'], 'Agwara': ['Shagunu'], 'Bida': ['Bida'], 'Borgu': ['Babana', 'Wawa'], 'Bosso': ['Bosso'], 'Chanchaga': ['Minna'], 'Edati': ['Jima/Doko', 'Kutigi/Edati'], 'Gbako': ['Edozhigi', 'Lemu'], 'Gurara': ['Gawu'], 'Katcha': ['Badeggi', 'Katcha'], 'Kontagora': ['Kontagora(rural)'], 'Lapai': ['Birnin_Maza', 'Ebbo', 'Gulu'], 'Lavun': ['Kutigi/Edati'], 'Magama': ['Auna', 'Ibelu'], 'Mariga': ['Koton_Kobo', 'Kumbashi'], 'Mashegu': ['Mashegu', 'Zugurma'], 'Mokwa': ['Kede', 'Mokwa'], 'Munya': ['Muyi'], 'Paikoro': ['Kafin_Koro', 'paiko'], 'Rafi': ['Guna', 'Kusheri', 'Kwon_Goma', 'Tegina'], 'Rijau': ['Rijau'], 'Shiroro': ['Galkogo', 'Kuta'], 'Suleja': ['Suleja'], 'Tafa': ['Tapa'], 'Wushishi': ['Wushishi'] 
        }
    },
    Ogun = {
        StateName: "Ogun",
        localGovernments: {
            'Abeokuta_North': ['Abeokuta(Rural)', 'Imala'], 'Ado_Odo/Otta': ['Ado_Odo', 'Igbesa', 'Otta_Rural'], 'Ewekoro': ['Itori'], 'Ifo': ['Agbado', 'Ifo', 'Ojodu'], 'Ijebu_East': ['Fetedo', 'Ogbere', 'Ojowo'], 'Ijebu_North': ['Ago_Iwoye', 'Ijebu_Igbo', 'Oru/Awaa/Ilapoaru'], 'Ijebu_North_East': ['Atan'], 'Ijebu_Ode': ['Ijebu_Ode'], 'Ikenne': ['Irepodun'], 'Imeko_Afon': ['Ifeyintedo', 'Ipokia'], 'Obafemi_Owode': ['Ajebo', 'Ajura', 'Alapako_oni', 'Kajola', 'Mokoloki', 'Mokoloki_Asipa', 'OBA', 'Obafemi', 'Ofada', 'Ogunmakin', 'Onidundu', 'Owode'], 'Odeda': ['Aigbagba', 'Alabata', 'Ilugun', 'Itesi', 'Obantoko', 'Obete', 'Odeda', 'Olodo', 'Opeji', 'Osiele'], 'Odogbolu': ['Alekunifesowapo', 'Leguru'], 'Ogun_Waterside': ['Abigi', 'Ijebu_Manuwa', 'Iwopin', 'Ode_Omi'], 'Remo_North': ['Isala'], 'Sagamu': ['Ode_Lemo', 'Sagamu(Rural)'], 'Yewa_North': ['Ayetoro', 'Igbogila', 'Oja_Odan', 'Tata'], 'Yewa_South': ['Ifeko_Wajo', 'Ilaro(Rural)']
        }
    },
    Ondo = {
        StateName: "Ondo",
        localGovernments: {
            'Akoko_North_East': ['Akunnu/Isowopo', 'Ikare(Rural)'], 'Akoko_North_West': ['Ajowa', 'Arigidi(Rural)', 'Irun/Surulere', 'Oke_Agbe'], 'Akoko_South_East': ['Epinmi_Akoko', 'Ifira_Akoko', 'Ipe_Akoko', 'Isua_Akoko', 'Sosan_Akoko'], 'Akoko_South_West': ['Akungba_Akoko', 'Oba_Akoko', 'Oka_Akoko', 'Supare_Akoko'], 'Akure_North': ['Aiyede_Ogbese', 'Iju/Ita_Ogbolu(Rural)', 'Oba_Ile'], 'Akure_South': ['Igba_Toro', 'Oda'], 'Ese_Odo': ['Arogbo_II', 'Arogbo_IV', 'Babomi', 'Igbekebo', 'Inikorogha', 'Kiribo', 'Ojuala', 'Ukparama_Ward_II/Arogbo_III', 'UkparamaI_I/Arogbo_I'], 'Idanre': ['Alade', 'Odoe_Idanre', 'Owena'], 'Ifedore': ['Igbara_oke', 'Ijare', 'Ilara', 'Ipogun'], 'Ilaje': ['Aheri_Kingdom', 'Etikan_Kingdom', 'Igbotu', 'Mahin_Kingdom', 'Ugbo_Kingdom'], 'Ile_Oluji/Okeigbo': ['Agunla', 'Bamkemo', 'Ileoluji', 'Okeigbo', 'Tenidire'], 'Irele': ['Ajagba', 'Akotogbo', 'Igbinsin_Oloto', 'Odeirele', 'Omi'], 'Odigbo': ['Abojupa', 'Alawaye', 'Araromi_Obu', 'Oniparaga', 'Ore(Rural)'], 'Okitipupa': ['Ayeka', 'Igbodigo', 'Igbotako', 'Ikoya', 'Ilutitun', 'Odeya', 'Okitipupa'], 'Ondo_East': ['Oboto', 'Owena_Obadore', 'Tekunle'], 'Ondo_West': ['Ajegunle', 'Bomodeloku', 'Ondo'], 'Ose': ['Afo', 'Arimogija', 'Idoani', 'Idogun', 'Ifon', 'Ijagba', 'Ikaro', 'Imeri', 'Imoru', 'Okeluse', 'Ute'], 'Owo': ['Emure_Ile', 'Idasen', 'Ipele', 'Isuada', 'Iyere', 'Owo(rural)', 'Upenmen', 'Uso']
        }
    },
    Osun = {
        StateName: "Osun",
        localGovernments: {
            'Aiyedade': ['Gbongan', 'Ode_Omu', 'Orile_Owu'], 'Aiyedire': ['Ile_Ogbo', 'Kuta', 'Oke_Osun_(Alabata)', 'Olupona'], 'Atakunmosa_East': ['Ajebamidele', 'Eti_Oni', 'Ipole', 'Iwara'], 'Atakunmosa_West': ['Epe/Ifelodun', 'Ibodi', 'Ifewara', 'Isaobi', 'Itagunmodi', 'Muroko', 'Okebode', 'Osu'], 'Boluwaduro': ['Eripa', 'Igbajo', 'Iresi'], 'Boripe': ['Aagba/Ororuwo', 'Ada', 'Iragbiji', 'Iree'], 'Ede_North': ['Ede'], 'Ede_South': ['Alajue', 'Sekona'], 'Egbedore': ['Ara', 'Awo', 'Ido_Osun', 'Ikotun', 'Iragberi', 'Iwoye/Origo', 'Ojo', 'Okinni'], 'Ejigbo': ['Ejigbo', 'Ife_Odan', 'Ilawo', 'Olla'], 'Ife_North': ['Ashipa/Akinlalu', 'Edunabon', 'Famia', 'Ipetumodu(Rural)/Yakoyo', 'Moro', 'Oyere_I', 'Oyere_II'], 'Ife_South': ['Abiri', 'Aye_Amodo', 'Ifetedo', 'Kere', 'Mefoworade/Omifunfun', 'Oke_Owena/Gbengbeleku', 'Olode', 'Osi/Ara/Joshua'], 'Ifedayo': ['Oke_Ila', 'Ora'], 'Ila': ['Ila'], 'Irewole': ['Ikire'], 'Isokan': ['Apomu', 'Ikoyi'], 'Iwo': ['Agberire', 'Iwo'], 'Obokun': ['Eesun/Ido_Oko', 'Esa_Odo', 'Esa_Oke', 'Ibokun', 'Ilahun/Ikinyinwa', 'Ilare', 'Ilase/Idominasi', 'Imesi_ile', 'Otan_Ile'], 'Odo_Otin': ['Asi/Asaba/Oyan', 'Ekosin/Iyeku', 'Faji/Opete/Igbaye', 'Ijabe/Ila/Odo', 'Inisa/Obe/Agbeye', 'Okua/Ekusa', 'Okuku'], 'Ola_Oluwa': ['Ajagba/Iwo_Oke', 'Asa/Ajagun_lase', 'Asamu', 'Bode_Osi', 'Ikire_Ile/Iwara', 'Isero/Ikonifin', 'Obamoro/Ile_Ogo', 'Ogbaagba', 'Telemu'], 'Olorunda': ['Oba_Ife/Oba_Oke'], 'Oriade': ['Erinmo/Iwaraja', 'Erin_Oke/Erin_Ijesa', 'Ijebu_Jesa_Rarul', 'Ijeda/Iloko', 'Ipo_Arakeji', 'Ikeji_Arakeji', 'Ikeji_Ile', 'Ipetu_Ijesa', 'Iwoye'], 'Orolu': ['Ifon']
        }
    },
    Oyo = {
        StateName: "Oyo",
        localGovernments: {
            'Afijio': ['Akinmorin/Jobele', 'Awe', 'Fiditi', 'Ilora/Oluwa_Tedo', 'Imini', 'Iware'], 'Akinyele': ['Ajibade/Alabata', 'Akinyele', 'Arulogun/Igbo_Oloyin', 'Ijaye', 'Ikereku', 'Iroko', 'Moniya', 'Olode/Onidundu', 'Olorisakoko/Mele'], 'Atiba': ['Atiba'], 'Atisbo': ['Ago_Are/Owo', 'Aha/Tede', 'Irawo/Ofiki'], 'Egbeda': ['Ayede/Alugbo', 'Egbeda', 'Erunmu', 'Olodo/Kumapayi', 'Osegere', 'Owobaale/Kasumu'], 'Ibarapa_Central': ['Idere', 'Igboora'], 'Ibarapa_East': ['Eruwa', 'Lanlate'], 'Ibarapa_North': ['Ayete', 'Igangan', 'Tapa'], 'Irepo': ['Kishi'], 'Iseyin': ['Ado_Awaye', 'Iseyin', 'Osogun'], 'Itesiwaju': ['Ipapo/Oke_Amu', 'Komu/Igbojaye', 'Temidire_Layout'], 'Iwajowa': ['Aiyegun', 'Idiko_Ago/Itasa/Ayetoroile', 'Idiko_Ile', 'Iganna', 'Ijio', 'Ilaji_Ile', 'Iwere_Ile'], 'Kajola': ['Ilero', 'Isemi_Ile/Ilua', 'Okeho'], 'Lagelu': ['Ejioku/Ile_Igbon/Ariku', 'Lagun/Aromona', 'Lalupon/Iyana_Offa', 'Offa_Igbo', 'Ogunremi/Ogunsina', 'Olorunda/_Monatan', 'Oyedeji/Olode/Kutayi', 'Sagbe/Pabiekun'], 'Ogo_Oluwa': ['Ogo_Oluwa'], 'Olorunsogo': ['Igbeti'], 'Orelope': ['Igboho_Township', 'Igboho_Villages'], 'Ori_Ire': ['Ikoyi_Ile', 'Oolo'], 'Oyo_West': ['Oyo_Rural'], 'Saki_East': ['Agbonle', 'Ago_Amodu', 'Ogoro', 'Oje_Owode', 'Sepeteri'], 'Saki_West': ['Saki/Ekokan'], 'Surulere': ['Gambari/Baya', 'Iresadu/Arolu', 'Iwofin', 'Oko']
        }
    },
    Plateau = {
        StateName: "Plateau",
        localGovernments: {
            'Barkin_Ladi': ['Fan', 'Foron', 'Gashish', 'Heipang'], 'Bokkos': ['Bokkos', 'Daffo', 'Kamwai', 'Manguna', 'Mushere', 'Richa', 'Sha', 'Toff'], 'Jos_East': ['Federe', 'Fobur', 'Fursum', 'Maigemu', 'Shere'], 'Jos_North': ['Gwong'], 'Jos_South': ['Du', 'Gyel', 'Kuru', 'Vwang'], 'Kanam': ['Dengi', 'Garga', 'Kanam', 'Kantana'], 'Kanke': ['Ampang_East', 'Amper', 'Garram', 'Kabwir', 'Pai', 'Tal'], 'Langtang_North': ['Bwarat', 'Gazum', 'Langtang(Rural)', 'Pil'], 'Langtang_South': ['Dadin_Kowa', 'Fajul', 'Gamakai', 'Lashel', 'Resettlement_Area', 'Sabon_Gida', 'Timbol', 'Turaki'], 'Mangu': ['Gindiri', 'Jipal', 'Kerang', 'Kumbul', 'Langai', 'Mangu', 'Panyam', 'Vodni'], 'Mikang': ['Garkawa', 'Koeneom', 'Montol', 'Paipung'], 'Pankshin': ['Chip', 'Fier', 'Kadung', 'Lankan', 'Pankshin(Rural)', 'Wokkos'], "Qua'an_Pan": ['Bwall', 'Doemak', 'Dokan_Kasuwa', 'Kwal(Koffar)', 'Kwalla', 'Kwande', 'Kwang', 'Namu'], 'Riyom': ['Jal', 'Riyom'], 'Shendam': ['Dakan_Tofa', 'Derpeng', 'Dorok', 'Shendam'], 'Wase': ['Bashar', 'Kadarko', 'Lamba', 'Wase_Town']
        }
    },
    Rivers = {
        StateName: "Rivers",
        localGovernments: {
            'Abua/Odual': ['Abua/Odual'], 'Ahoada_East': ['Ahoada'], 'Ahoada_West': ['Ahoada'], 'Akuku_Toru': ['Akuru_Toru'], 'Andoni': ['Andoni'], 'Asari_Toru': ['Buguma'], 'Bonny': ['Bonny'], 'Degema': ['Degema'], 'Eleme': ['Eleme'], 'Emohua': ['Emohua'], 'Etche': ['Etche'], 'Gokana': ['Gokana'], 'Ikwerre': ['Ikwerre'], 'Khana': ['Bori', 'Khana'], 'Obio/Akpor': ['Obio/Akpo'], 'Ogba/Egbema/Ndoni': ['Ndoni', 'Ogba/Egbema'], 'Ogu/Bolo': ['Ogu/Obolo'], 'Okrika': ['Okrika'], 'Omuma': ['Omuma'], 'Opobo/Nkoro': ['Opobo'], 'Oyigbo': ['Ndoki', 'Oyigbo'], 'Port_Harcourt': ['Port__Harcourt_(Rural)'], 'Tai': ['Tai']
        }
    },
    Sokoto = {
        StateName: "Sokoto",
        localGovernments: {
            'Binji': ['Binji'], 'Bodinga': ['Bodinga', 'Dingyadi', 'Sifawa'], 'Dange_Shuni': ['Dange', 'Shuni'], 'Gada': ['Gada'], 'Goronyo': ['Goronyo'], 'Gudu': ['Gudu'], 'Gwadabawa': ['Gwadabawa', 'Salame'], 'Illela': ['Illela'], 'Isa': ['Isa'], 'Kebbe': ['Kebbe'], 'Kware': ['Durbawa', 'Hamma_Ali', 'Kware', 'Saki', 'Umaruma'], 'Rabah': ['Gandi', 'Rabah'], 'Sabon_Birni': ['Sabon_Birni'], 'Shagari': ['Shagari'], 'Silame': ['Silame'], 'Sokoto_North': ['Sokoto'], 'Sokoto_South': ['Sokoto'], 'Tambuwal': ['Dogon_Daji', 'Gindi', 'Jabo', 'Sanyinna', 'Tambawal'], 'Tangaza': ['Tangaza'], 'Tureta': ['Tureta'], 'Wamako': ['Dundaye', 'Gumbi', 'Wammako'], 'Wurno': ['Achida', 'Wurno'], 'Yabo': ['Kilgori', 'Yabo']
        }
    },
    Taraba = {
        StateName: "Taraba",
        localGovernments: {
            'Ardo_Kola': ['Ardo_Kola'], 'Bali': ['Bakundi', 'Dakka'], 'Donga': ['Donga'], 'Gashaka': ['Gashaka'], 'Gassol': ['Gassol', 'Mutum_Biyu'], 'Ibi': ['Dampara', 'Ibi', 'Sarkin_Kudu'], 'Jalingo': ['Jalingo(Rural)'], 'Karim_Lamido': ['Old_Muri', 'Wurkum'], 'Kurmi': ['Kurmi'], 'Lau': ['Abbare', 'Gowe', 'Karlahi', 'Kunini', 'Lau'], 'Sardauna': ['Mambilla'], 'Takum': ['Takum'], 'Ussa': ['Ussa'], 'Wukari': ['Arufu', 'Auyi', 'Bantaje', 'Chonku', 'Gidan_Idi', 'Kente', 'Rafin_Kada', 'Wukari'], 'Yorro': ['Kwaji', 'Mumuye'], 'Zing': ['Bitako', 'Bugong', 'Dinding', 'Lemman', 'Monkin', 'Yakoko', 'Zing']
        }
    },
    Yobe = {
        StateName: "Yobe",
        localGovernments: {
            'Bade': ['Bade'], 'Bursari': ['Bursari'], 'Damaturu': ['Damaturu(Rural)'], 'Fika': ['Fika'], 'Fune': ['Fune'], 'Geidam': ['Geidam'], 'Gujba': ['Gujba'], 'Gulani': ['Gulani'], 'Jakusko': ['Jakusko'], 'Karasuwa': ['Karasuwa'], 'Machina': ['Machina'], 'Nangere': ['Mamudo', 'Nangere'], 'Nguru': ['Nguru(Rural)'], 'Potiskum': ['Potiskum'], 'Tarmuwa': ['Tarmuwa'], 'Yunusari': ['Yunusari'], 'Yusufari': ['Yusufari']
        }
    },
    Zamfara = {
        StateName: "Zamfara",
        localGovernments: {
            'Anka': ['Bagega', 'Barayar_Zaki', 'DanGaladima', 'Matseri', 'SabonBirini', 'Waramu', 'Wuya', "Yar'sabaya"],
        }
    },
    FCT = {
        StateName: "FCT",
        localGovernments: {
            'Abaji': ['Abaji', 'Yaba'], 'Abuja_Municipal_Area_Council(AMAC)': ['Garki', 'Gui', 'Gwagwa', 'Gwarinpa', 'Jiwa', 'Kabusa', 'Karshi', 'Karu', 'Nyanya', 'Orozo'], 'Bwari': ['Bwari'], 'Gwagwalada': ['Gwaywalada'], 'Kuje': ['Kuje', 'Rubbochi'], 'Kwali': ['Ashara', 'Dafa', 'Gumbo', 'Kilankwa', 'Kwali', 'Pai', 'Wako', 'Yangoji', 'Yebu']
        }
    },
]
// console.log(states[0].localGovernments)

stateNames = [];


for (i = 0; i < states.length; i++) {
    stateNames.push(states[i].StateName)
}



// Map your choices to your option value

for (let i = 0; i < stateNames.length; i++) {
    var opt = stateNames[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    StateDropDown.appendChild(el);
}

localGovernmentTowns = [];

// When an option is changed, search the above for matching choices
$('#select-state').on('change', function () {
    localGovernmentTowns.length = 0;
    // console.log(localGovernmentTowns);
    // Set selected option as variable
    var selectValue = $(this).val();
    window.selectValue = selectValue;
    // console.log(selectValue)
    GetLocalGovernment = states.find(x => x.StateName === selectValue);
    if (selectValue === '') {
        $('#select-lga-main').empty();
        $('#select-lga-main').append("<option value=''>Pick a local Government Area</option>");
    } else {
        GetObjectKeys = GetLocalGovernment.localGovernments;
        KeyNames = Object.keys(GetObjectKeys);

        // Empty the target field
        $('#select-lga-main').empty();
        $('#select-lga-town').empty();
        $('#select-lga-town').append("<option value=''>Pick a Town</option>");

        // For each chocie in the selected option
        $('#select-lga-main').append("<option value=''>Pick a local Government Area</option>");
        for (i = 0; i < KeyNames.length; i++) {
            $('#select-lga-main').append("<option value='" + KeyNames[i] + "'>" + KeyNames[i] + "</option>");
        }
    }
});

$('#select-lga-main').on('change', function () {

    localGovernmentTowns.length = 0;
    var selectValue2 = $(this).val();
    console.log(selectValue2);
    console.log(selectValue);
    states.forEach(state => {
        localGovernmentTowns.push(state.localGovernments[selectValue2])
    });
    localGovernmentTowns = localGovernmentTowns.filter(function( element ) {
        return element !== undefined;
     });

     for (let i = 0; i < localGovernmentTowns.length; i++) {
         console.log(Object.values(localGovernmentTowns[0]).length)
    }

    console.log(localGovernmentTowns[0][1]);

    $('#select-lga-town').empty();

    $('#select-lga-town').append("<option value=''>Pick a Town</option>");
    for (i = 0; i < Object.values(localGovernmentTowns[0]).length; i++) {
        $('#select-lga-town').append("<option value='" + localGovernmentTowns[0][i] + "'>" + localGovernmentTowns[0][i] + "</option>");
    }
})