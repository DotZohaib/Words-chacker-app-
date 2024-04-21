const df = [
  { 'Text Content': 'سچل جي کلام ۾ سنڌ جو رنگ چمکائيو', 'Category': 'sachal', 'Line No': 1 },
  { 'Text Content': 'محبت جو سمفوني جيثا روح ٻيڙيو', 'Category': 'sachal', 'Line No': 2 },
  { 'Text Content': 'روحاني علائڻ ۾ اُھي جي الفاظ ٻيڙيو', 'Category': 'sachal', 'Line No': 3 },
  { 'Text Content': 'دلن جو راهبر اندھيرون راتن ۾ چمکايو', 'Category': 'sachal', 'Line No': 4 },
  { 'Text Content': 'صوفي جي ڪلم پريم ۾ ڊوبيو', 'Category': 'sachal', 'Line No': 5 },
  { 'Text Content': 'سچل جو شاعري اڀيرون جو سمندر', 'Category': 'sachal', 'Line No': 6 },
  { 'Text Content': 'محبوب جو چھپ چھپي گپ گهري ۽ گهرو', 'Category': 'sachal', 'Line No': 7 },
  { 'Text Content': 'هر ڪلام ۾ عہد ۾ مقدس چوپائيو', 'Category': 'sachal', 'Line No': 8 },
  { 'Text Content': 'تھر جي ريگستان ۾ چمک گهري سان', 'Category': 'sachal', 'Line No': 9 },
  { 'Text Content': 'سچل جو الفاظ الٽالڻ جي امر', 'Category': 'sachal', 'Line No': 10 },
  { 'Text Content': 'سندھو جو دريا اُھي جي نعري چهپ', 'Category': 'sachal', 'Line No': 11 },
  { 'Text Content': 'روحاني سفر چراغ جي آتشن', 'Category': 'sachal', 'Line No': 12 },
  { 'Text Content': 'ڪلام ۽ موسيقي اُھي جو جان گاتو', 'Category': 'sachal', 'Line No': 13 },
  { 'Text Content': 'محبت جي گيت اُھي جون اوتار', 'Category': 'sachal', 'Line No': 14 },
  { 'Text Content': 'سچل جو باغ ۾ گلابون ٿيل چي چمکايو', 'Category': 'sachal', 'Line No': 15 },
  { 'Text Content': 'ريسلوءَ جي خوشبو اندھيرون چي چمكايو', 'Category': 'sachal', 'Line No': 16 },
  { 'Text Content': 'سچل جي ورثو ۽ ڀنڊ چمکي رهيو', 'Category': 'sachal', 'Line No': 17 },
  { 'Text Content': 'علم جي چراغ صاف ۽ روشن', 'Category': 'sachal', 'Line No': 18 },
  { 'Text Content': 'سنڌي جو چپا اُھي جي شاعري چمكايو', 'Category': 'sachal', 'Line No': 19 },
  { 'Text Content': 'سچل سرمست هميشه ۽ هميشه', 'Category': 'sachal', 'Line No': 20 },
  { 'Text Content': 'ﺳﺮﻣﺴﺖ ﺳﭽﻞ رحﺮﺳﺎﻟﻮ آﻫﻲ ﺧﺪﻣﺖ حﺎﺿﺮ ﺟﻮ', 'Category': 'sachal', 'Line No': 21 },
  { 'Text Content': ' ﺗﻲ آڌار ﺟﻲ ﻧﺴﺨﻲ ﻛﻴﻞ ﻣﺮﺗﺐ ﺟﻲ ﺻﺎحﺐ اﻧﺼﺎري ﻋﻠﻲ ﻋﺜﻤﺎن اﻳﮉﻳﺸﻦ اﻧﭩﺮﻧﻴﭧ ﻫﻲ', 'Category': 'sachal', 'Line No': 22 },
  { 'Text Content': 'ﭜﻴﭩﮡ ﮐﻲ اﻧﻬﻦ ﻛﺮڻ ﻫﭣ ﻧﺴﺨﺎ ﻣﺨﺘﻠﻒ ﺟﺎ رﺳﺎﻟﻲ ﻻ ء ﻣﻮن رﻫﻨﺪي آﻣﺮﻳﻜﺎ دور ﮐﺎن', 'Category': 'sachal', 'Line No': 23 },
  { 'Text Content': 'ﺳﻨﮅ ﻃﺌﻲ اﻫﻮ ﭘﻮ ء ﮐﺎن اﭜﻴﺎس ﻣﻨﺎﺳﺐ', 'Category': 'sachal', 'Line No': 24 },
  { 'Text Content': 'ﻫﻮ ﻛﻢ ﻃﻠﺐ وﻗﺖ ﻣﺸﻜﻞ ﺑﻴﺤﺪ آﻫﻲ ﻣﻮزون ﻣﻨﺎﺳﺐ ﺗﺮﻛﻴﺐ ﺗﺮﺗﻴﺐ ﻛﻬﮍي ﺗﻪ ﻛﺮڻ', 'Category': 'sachal', 'Line No': 25 },
  { 'Text Content': 'ﺗﻪ ﻗﺎﺑﻠﻴﺖ ﻋﻠﻤﻲ ﺟﻲ ﺻﺎحﺐ اﻧﺼﺎري', 'Category': 'sachal', 'Line No': 26 },
  { 'Text Content': 'ﻧﻪ ﻛﻮ ﺷﻚ ﻛﻮ ﮐﻲ ﻣﻮن', 'Category': 'sachal', 'Line No': 27 },
  { 'Text Content': 'وٽ ﺻﺎحﺐ آﻏﺎ ﮔﻞ دوﺳﺖ ﻣﻬﺮﺑﺎ ن', 'Category': 'sachal', 'Line No': 28 },
  { 'Text Content': 'ﻣﻮن ﺗﻲ ﻋﺮض ﻣﻨﻬﻨﺠﻲ ﺑﻪ ﻛﺎﭘﻲ ﻲ', 'Category': 'sachal', 'Line No': 29 },
  { 'Text Content': 'ﺟﻲ ﺻﺎﺣﺐ آﻏﺎ ﺗﻪ ڏﻧﻲ اﺟﺎزت وﺳﺎﺋﻞ وﻗﺖ', 'Category': 'sachal', 'Line No': 30 },
  { 'Text Content': 'ﺳﺎﮘﻮ ﺟﻮ رﺳﺎﻟﻲ وٽ ﭨﻨﻬﻲ اﺳﺎن', 'Category': 'sachal', 'Line No': 31 },
  { 'Text Content': 'ﻛﻼم ﺳﻨﮅي ﺟﻮ ﺳﺎﺋﻴﻦ ﺳﭽﻞ', 'Category': 'sachal', 'Line No': 32 },
  { 'Text Content': 'ﻣﻠﻜﻦ ﺟﻮ ﻣﻮﻟﻰ ﺟﻲ ﺳﺒﺤﺎن ﻛﺮ ﺳﺎراه اول', 'Category': 'sachal', 'Line No': 33 },
  { 'Text Content': 'ڌﮢﻴﻦ ڏﻳﻬﻪ ڏﺳﻮ ﻛﻴﺎ ﻣﺤﻀﻮض ﻣﮍﻳﺎﺋﻲ', 'Category': 'sachal', 'Line No': 34 },
  { 'Text Content': 'ڏﻳﻦ ﺳﺒﻖ ﺳﻮﻳﻦ ﺟﺎ ﻛﺘﺎﺑﻦ ﻛﺎﺗﺐ ﻛﻲ', 'Category': 'sachal', 'Line No': 35 },
  { 'Text Content': 'ﻧﺒﻴﺮن ﻧﺎﻣﻴﺎن ﻛﻴﻮن ﻣﺴﺎﺋﻞ ﻣﺴﺌﻼ ﻛﻲ', 'Category': 'sachal', 'Line No': 36 },
  { 'Text Content': 'ﭘﮍﻫﺎﺋﻦ ﭘﮍﻫﻴﻮن ﺳﺎن ﭘﺮوﺟﻪ ﭘﺎڻ ﭘﮍﻫﻴﺎ ﻛﻲ', 'Category': 'sachal', 'Line No': 37 },
  { 'Text Content': 'رﻫﻦ روز ﺷﺎﻏﻞ وﻇﻴﻔﻦ وردن ﻛﻲ', 'Category': 'sachal', 'Line No': 38 },
  { 'Text Content': 'وراﺋﻦ ورﻳﻮن ﮐﻲ ورق و اﺋﺴﻴﻮن ڏﺳﻴﻮن', 'Category': 'sachal', 'Line No': 39 },
  { 'Text Content': 'ﻛﻼم ﺟﻲ ﺳﺎﺋﻴﻦ ﻋﻼوه ﮐﺎن ان', 'Category': 'sachal', 'Line No': 40 },
  { 'Text Content': 'ﻛﺒﻲ ﻛﻮﺷﺶ ﺟﻲ ﻛﺮڻ ﭘﻮرو ﺟﻠﺪ از ﺟﻠﺪ ﺟﻴﻜﻮ آﻫﻲ رﻫﻴﻞ ﺑﻪ اﭸﺎن ﻛﻢ ﻛﺠﻪ ﺟﻮ رﻳﮉﻧﮓ ﭘﺮ وف', 'Category': 'sachal', 'Line No': 41 },





  { 'Text Content': 'سورج ڳالھُ کڏهن ھڪ چھٺو چهو ریتن ۾ ناچو ڄاڻ', 'Category': 'shah_jo_risalo', 'Line No': 1},
  { 'Text Content': 'رات جي چھائندا ڏيندي ھڪ ڄاڻ هوا', 'Category': 'shah_jo_risalo', 'Line No': 2 },
  { 'Text Content': 'چاند ڀاڙيندو دريا ٿيو رنگايو چاندن جو شوق ۾ للڙو', 'Category': 'shah_jo_risalo', 'Line No': 3 },
  { 'Text Content': 'مونلائٹ ۾ ڏيندي ۾ جي گلو ۽ ڦر نرمائڻ', 'Category': 'shah_jo_risalo', 'Line No': 4 },
  { 'Text Content': 'موسم جي وحشت گانو جنگل جي درختن هلي ٿيو', 'Category': 'shah_jo_risalo', 'Line No': 5},
  { 'Text Content': 'زمين ڇٺي ٿي جھڙي جھڙايلندو ۽ جھپ رکايلندو', 'Category': 'shah_jo_risalo', 'Line No': 6 },
  { 'Text Content': 'ڏ ﮐﻨﺪ ن ﮐﻲ ڏاﺗ ﺮ ﻻﻫﻴﻴﻦ ﺗﻮن ڏﻳﻴﻦ ﺗﻮن', 'Category': 'shah_jo_risalo' , 'Line No': 7},
  { 'Text Content': 'دردن ﮐﻲ دارو ن ﺗﻮن ﻃﺒﻴﺐ ﺗﻮن ﺣﺒﻴﺐ ﺗﻮن', 'Category': 'shah_jo_risalo', 'Line No': 8 },
  { 'Text Content': 'ربﱡ ﺗﻮن ﻫﺎدي ﺗﻮن ﻻﻫﻴﻴﻦ ﺗﻮن ڏ ﻳﻴﻦ ﺗﻮن', 'Category': 'shah_jo_risalo', 'Line No': 9 },
  { 'Text Content': 'دواء ﺟﻲ درد ﺗﻮن ﻃﺒﻴﺐ ﺗﻮن ﺣﺒﻴﺐ ﺗ ﻮن', 'Category': 'shah_jo_risalo', 'Line No': 10 },
  { 'Text Content': 'ﭘﻬﺮﻳﻮن داﺳﺘﺎن', 'Category': 'shah_jo_risalo', 'Line No': 11 },
  { 'Text Content': 'ﺟﻮ درد ﻣﻨﻬﻨﺠﻲ دارون', 'Category': 'shah_jo_risalo', 'Line No': 12 },
  { 'Text Content': 'ﺟﻮ درد ﻣﻨﻬﻨﺠﻲ دارو ن ﻃﺒﻴﺐ ﺗ ﻦ ﭤﻴﻨﺪو', 'Category': 'shah_jo_risalo', 'Line No': 13 },
  { 'Text Content': 'ﺣﺒﻴﺐ زﻣﺎن ﻫﺮ ﺳ ﮑﻴﻮ ﻋﺎدت ا ﻫﺎ', 'Category': 'shah_jo_risalo', 'Line No': 14 },
  { 'Text Content': 'ﻗ ﺮﻳﺐ ﺳﻮ ﻛﻮﭠﻲ ﻟﻬﻲ ﻛ ﺮ ﺳﻮ ﻛ ﻬﻲ', 'Category': 'shah_jo_risalo', 'Line No': 15 },
  { 'Text Content': 'ﺳﺎﻣ ﻬﻮن ا ﺟﻞ ﻋﺎﺷﻖ ﭴﺎڻ و ﭸﺎﺋﻲ ﭴ ﻞ', 'Category': 'shah_jo_risalo', 'Line No': 16 },
  { 'Text Content': 'ﭘﺎڻ م ﻛﺮ ﭘﺎﺳﻲ ﺟﻲ ﻧ ﻴﻨﻬﻦ ﻫﻴﭡﺎن ﻧﻴﺰي', 'Category': 'shah_jo_risalo', 'Line No': 17 },
  { 'Text Content': 'ﺳﺎڻ ﻛ ﻬ ﮡ ﻛﻮﭠﻲ ﺳ ﭙﺮﻳﻦ ﻛ ﻬﻲ ﻛﻮﭠﻲ', 'Category': 'shah_jo_risalo', 'Line No': 18 },
  { 'Text Content': 'ا ﭼﻦ ﮘﺎٽ ا وﻧﭽﻲ ﺳﺎﻣ ﻬﺎن ا ﺟﻞ ﻋﺎﺷﻖ', 'Category': 'shah_jo_risalo', 'Line No': 19 },
  { 'Text Content': 'ﻛ ﻦ ﻧﻪ ﭘﺎڻ ﭘﺎﺳﻲ ﺟﻲ ﻧ ﻴﻨﻬﻦ ﻫﻴﭡﺎن ﻧﻴﺰي', 'Category': 'shah_jo_risalo', 'Line No': 20 },
  { 'Text Content': 'ﺟﻮ ﭘﺎر ﺳﻨﺪي ﭘﺮﻳﺎن ﺳﻼم ﺋﻲ ﺳ ﻜﻮت', 'Category': 'shah_jo_risalo', 'Line No': 21 },
  { 'Text Content': 'ﻣﭡﺎﺋﻲ ﻣﮍﺋﻲ ﺟﻲ ﭘﺎر ﺳﻨﺪي ﭘ ﺮﻳﺎن', 'Category': 'shah_jo_risalo', 'Line No': 22 },
  { 'Text Content': 'ﮐﻲ ا ﺳﺒﺎب ﺟﻲ ﻋﺸﻖ ﭘ ﮁﻴﺎﺋ ﻮ ﭘ ﺮ', 'Category': 'shah_jo_risalo', 'Line No': 23 },
  { 'Text Content': 'ورﺳﻴﻮن ﺟﻮن رﺣﻪ ﻋﺒﺪاﻟﻠﻄﻴﻒ ﺷﺎﻫﻪ ﺷﺎﻋﺮ ﺣﻴﺎت ﺳﺪا  ﭤﻴﻮن ﺷﺮوع ﻣﻠﻬﺎﺋﮡ ﺳﺎن ﺷﻮق ذوق ﭘﻮ ء ﮐﺎن ع', 'Category': 'shah_jo_risalo', 'Line No': 24},
  { 'Text Content': 'ﭘﺎﻛﺴﺘﺎن', 'Category': 'shah_jo_risalo', 'Line No': 25 },
  { 'Text Content': 'و وﻳﺘﺮ ﺟﺸﻦ ﺳﺎﻟﮕﺮه اﻫﻲ ﺟﺎ ﺷﺎﻫﻪ ﺑﻌﺪ ﭤﻴﮡ ﻗﺎﺋﻢ ﺟﻲ ﭔﻴﻦ ﺻﺪر ﺟﻲ ﻣﻠﻚ ﺟﻦ آﻫﻦ وﻳﺎ ﻣﻠﻬﺎﻳﺎ ﺗﻲ ﭘﻴﻤﺎﻧﻲ ڏي', 'Category': 'shah_jo_risalo', 'Line No': 26 },
  { 'Text Content': 'ﺷﺎﻋﺮن ادﻳﺒﻦ ﺟﻲ ﭜﺎﮜﻦ ﻣﺨﺘﻠﻒ ﺟﻲ ﻣﻠﻚ ﺳﻔﻴﺮن ﺗﻮڙي ﻧﻤﺎﺋﻨﺪن ﺟﻲ ﺳﻔﺎرﺗﺨﺎﻧﻦ ﭔﺎﻫﺮﻳﻦ ﻛﺎرﻛﻨﻦ اﻋﻠﻲ', 'Category': 'shah_jo_risalo', 'Line No': 27 },
  { 'Text Content': 'آﻫﻲ ﻛﺌﻲ ﭘﺌﻲ ﺷﻤﻮﻟﻴﺖ', 'Category': 'shah_jo_risalo', 'Line No': 28 },
  { 'Text Content': 'ﻃﻠﺐ ﺟﻲ ﻛﺘﺎﺑﻦ ﻣﻮزون ﺑﺎﺑﺖ ﺷﺎﻋﺮي ء ﺗﻮڙي ﺳﻮاﻧﺢ ﺟﻲ ﺷﺎﻫﻪ ﺑﻮﻗﺖ وﻗﺖ ﻛﺮي اﻧﻬﻲ ء', 'Category': 'shah_jo_risalo', 'Line No': 29 },
  { 'Text Content': 'ﺧﺼﻮﺻﺎ آﻫﻲ رﻫﻲ ﭤﻴﻨﺪي آﻫﻲ رﻫﻲ وڌﻧﺪي ﺗﻘﺎﺿﺎ ﺑﺎﺑﺖ ﻣﺘﻦ ﻣﺴﺘﻨﺪ ﻫﻚ ﺟﻲ رﺳﺎﻟﻲ ﺟﻲ ﺷﺎﻫﻪ', 'Category': 'shah_jo_risalo', 'Line No': 30 },
  { 'Text Content': 'ﺑﻮرڊ ادﺑﻲ ﺳﻨﮅي ﻛﻨﺪي ﻣﺤﺴﻮس ﮐﻲ ﺿﺮورت اﻧﻬﻲ ء واري ﻣﻄﺎﻟﻌﻲ ﻋﺎم ﺟﻲ ﻋﺎﻟﻤﻦ ﭔﺎﻫﺮﻳﻦ ﺗﻮڙي ادﻳﺒﻦ ﻣﻠﻜﻲ', 'Category': 'shah_jo_risalo', 'Line No': 31 },
  { 'Text Content': 'ﺳﻨﻪ ﻣﺘﻦ ﻣﻌﻴﺎري ﻫﻚ ﺟﻲ ﻛﻼم ﺟﻲ ﺷﺎﻫﻪ ﺗﻮڙي ﻛﺘﺎب ﺟﺎﻣﻊ ﻫﻚ ﺑﺎﺑﺖ ﻓﻜﺮ ﭘﺮواز ﺷﺎﻋﺮاﻧﻪ ﺟﻲ ﺷﺎﻫﻪ ع', 'Category': 'shah_jo_risalo', 'Line No': 32 },
  { 'Text Content': 'ﻛﻢ ﺟﻮ ﻛﺮڻ ﺗﻴﺎر ﭤﻲ ﺷﺎﻳﻊ ﻫﻴﻨﺌﺮ ﻣﺘﻦ ﺟﻮ ﻛﻼم ﻣﺎن ﺟﻦ ﻛﻴﻮ ﺣﻮاﻟﻲ ﺟﻲ ﺟﻦ ﺻﺎﺣﺐ ﻗﺎﺿﻲ ﻋﻠﻲ اﻣﺪاد ﻋﻼﻣﮧ', 'Category': 'shah_jo_risalo', 'Line No': 33 },
  { 'Text Content': 'آﻫﻲ رﻫﻴﻮ', 'Category': 'shah_jo_risalo', 'Line No': 34 },
  { 'Text Content': 'وڏي ﺟﻲ ﺷﺎﻫﻪ ﻣﺘﻦ ﻫﻲ ء ﭤﻴﻞ ﻣﺮﺗﺐ ﺟﻮ ﻛﻼم ﺟﻲ ﺷﺎﻫﻪ ﺗﻪ ﻛﺎﻧﻬﻲ ﺿﺮورت ﺟﻲ ﺟﺘﺎﺋﮡ ﮐﻲ ﮘﺎﻟﻬﻪ اﻧﻬﻲ ء ﻫﺖ', 'Category': 'shah_jo_risalo', 'Line No': 35 },
  { 'Text Content': 'آﻫﻲ ﻧﺘﻴﺠﻮ ﺟﻮ ﻓﻜﺮ ﻏﻮر ﮔﻬ ﺮي ﺟﻲ ﭴﺎﮢﻮ ﻋﺎﻟﻢ وڏي', 'Category': 'shah_jo_risalo', 'Line No': 36 },
  { 'Text Content': 'ﺳﭟ ﮔﺬرﻳﻞ ﺟﻦ ﺻﺎﺣﺐ ﻗﺎﺿﻲ ﻋﻼﻣﮧ وﭠﻲ ﮐﺎن ﺳﺎﻟﻦ', 'Category': 'shah_jo_risalo', 'Line No': 37 },
  { 'Text Content': 'ﭴﮡ ﺗﺮﺗﻴﺐ ﺗﺎﻟﻴﻒ ﻫﻲ ء ﺟﻲ ﻣﺘﻦ ﺟﻲ ﻛﻼم ﺟﻲ ﺷﺎﻫﻪ ﻛﺮي اﻧﻬﻲ ء آﻫﻲ ﻛﻴﻮ ﭘﺌﻲ ﻣﻄﺎﻟﻌﻮ ﺟﻮ ﻛﻼم ﺟﻲ ﺷﺎﻫﻪ', 'Category': 'shah_jo_risalo', 'Line No': 38 },
  { 'Text Content': 'آﻫﻲ ﺛﻤﺮ ﺟﻮ وﻳﭽﺎر ﻏﻮر ﮔﻬ ﺮي ﺟﻲ ﺳﺎﻟﻦ ﺳﭟ ﺟﻲ ﻣﻔﻜﺮ دﻣﺎغ روﺷﻦ ﻫﻚ', 'Category': 'shah_jo_risalo', 'Line No': 39 },
  { 'Text Content': 'ﻗﺎﺋﻢ ﻣﺘﻦ ﺻﺤﻴﺢ ﺟﻲ ﻛﻼم ﺻﺮف', 'Category': 'shah_jo_risalo', 'Line No': 40 },
  { 'Text Content': 'داﻧﺎ ﭘﮡ ﻻ ء آﮢﮡ ﺻﻮرت ﻛﺘﺎﺑﻲ ﮀﺎﭘﺎﺋﻲ ﺳﺎن ﻃﻮر ﺻﺤﻴﺢ ﮐﻲ ان ﻛﺮڻ ﻣﺴﻠﺴﻞ وڌﻳﻚ ﮐﺎن ﺳﺎل ﻫﻚ ﻣﺆﻟﻒ ء', 'Category': 'shah_jo_risalo', 'Line No': 41 },
  { 'Text Content': 'آﻫﻲ ورﺗﻮ ﻛﻢ ﮐﺎن ﺗﻮﺟﻬﻪ ﻛﻮﺷﺶ', 'Category': 'shah_jo_risalo', 'Line No': 42 },
  { 'Text Content': 'ﻣﻘﺼﺪ ﻣﻌﻨﻲ ﺗﻮڙي ﻣﻀﻤﻮن ﻧﻔﺲ ﺟﻮ ﻛﻼم ﺟﻲ ﺷﺎﻫﻪ ﻫﻦ ﺟﻮ آﻫﻲ اﻫﺎ ﺧﻮﺑﻲ ﺧﺎص ﺟﻲ اﺷﺎﻋﺖ ﻫﻦ ﺟﻲ ﻣﺘﻦ', 'Category': 'shah_jo_risalo', 'Line No': 43 },
  { 'Text Content': 'ﻛﺌﻲ ﻛﻮﺷﺶ ﺟﻲ ﻛﺮڻ ﭘﻴﺶ ﻣﻮﺟﺐ ﺗﺮﺗﻴﺐ ﻓﻄﺮي اﻧﻬﻲ ء ﮐﻲ ان آﻫﻲ وﻳﻮ ﻛﻴﻮ ﻣﻄﺎﻟﻌﻮ ﮔﻬ ﺮو ﺳﺎن ﻟﺤﺎظ ﺟﻲ', 'Category': 'shah_jo_risalo', 'Line No': 44 },
  { 'Text Content': 'ﺟﻮ ﺟﻨﻬﻦ آﻫﻲ آﻫﻲوﻳﺌﻲ اﻣﻜﺎن ﺟﻮ ﻣﻄﺎﺑﻘﺖ ﻣﻨﺎﺳﺒﺖ ﺳﺎن ﻣﻨﺰﻟﻦ ﺟﺪا ﺟﺪا ﺟﻲ زﻧﺪﮔﻲ ء ﺟﻲ ﺷﺎﻫﻪ', 'Category': 'shah_jo_risalo', 'Line No': 45 },
  { 'Text Content': 'ﻟﺤﺎظ اﻧﻬﻲ ء', 'Category': 'shah_jo_risalo' , 'Line No': 46},
  { 'Text Content': 'آﻫﻲ اﻋﻠﻲ ا ﺗﻢ ﮐﺎن ﮀﺎﭘﻦ ﻣﮍﻧﻲ اﮘﻴﻦ اﺷﺎﻋﺖ ﻫﻲ ء ﺳﺎن', 'Category': 'shah_jo_risalo', 'Line No': 47 },
  { 'Text Content': 'ﺟﺎ ﺑﻴﺘﻦ ﻣﺤﺾ ﺗﻪ ﻳﺎ ﮀﺎﭘﺎ اﮘﻴﺎن ﺟﺎ رﺳﺎﻟﻲ ﻣﺠﻤﻮﻋﺎ آﻫﻦ', 'Category': 'shah_jo_risalo', 'Line No': 48 },
  { 'Text Content': 'اﻫﮍ وري ﺗﻪ ﻳﺎ آﻫﻦ ﺷﺎﻣﻞ ﭘﮡ ﺑﻴﺖ ﺟﺎ ﺷﺎﻋﺮن ﻛﻦ ﭔﻴﻦ ﮔﮇ ﺳﺎن ﺑﻴﺘﻦ ﺟﻲ ﺷﺎﻫﻪ ﺟﻦ ن ﻣﺠﻤﻮﻋﻦ زﻳﺎده ﺟﻲ', 'Category': 'shah_jo_risalo', 'Line No': 49 },
  { 'Text Content': 'آﻫﻲ وﻳﺌﻲ ﻛﺌﻲ ﻛﻮﺷﺶ ﺟﻲ ﻛﺮڻ ﺷﺎﻣﻞ ﭜﻴﭩﻲ ﮐﻲ ﺑﻴﺘﻦ ﺟﻲ ﺷﺎﻫﻪ ﻓﻘﻂ ﺟﻦ آﻫﻦ ﺻﻮرت ﺻﺎف', 'Category': 'shah_jo_risalo', 'Line No': 50 },
  { 'Text Content': 'اﺷﺎﻋﺖ ﻫﻦ', 'Category': 'shah_jo_risalo', 'Line No': 51 },
  { 'Text Content': 'ﭤﻮ اﭼﻲ ﻧﻈﺮ ﺻﺎف ﻧﺴﺒﺘﺎ ﺧﺎﻛﻮ', 'Category': 'shah_jo_risalo' , 'Line No': 52},
  { 'Text Content': 'ﺳﺎن ﻟﺤﺎظ اﻧﻬﻲ ء آﻫﻲ وﻳﻮ رﮐﻴﻮ ﻣﺪ ﻧﻈﺮ ﻃﺮح ﺧﺎص ﮐﻲ ﺗﺮﺗﻴﺐ ﺳﭩﺎ ء ﺳﻠﺴﻠﻴﻮار ﺟﻲ ﻛﻼم ﻣﺴﺘﻨﺪ ﺟﻲ ﺷﺎﻫﻪ', 'Category': 'shah_jo_risalo', 'Line No': 53 },
  { 'Text Content': 'ﺷ ﺟﻨﻬﻦ آﻫﻲ ﻧﺴﺨﻮ ﻛﻴﻞ ﻣﺮﺗﺐ ﭘﻬﺮﻳﻮن ﻫﻲ ء ﺟﻮ ﻛﻼم ﺟﻲ ﺷﺎﻫﻪ ﺟﻮ ارﺗﻘﺎ ﺗﺪرﻳﺠﻲ ﺟﻲ ﻓﻜﺮ ذﻫﻦ ﺟﻲ ﺎﻋﺮ', 'Category': 'shah_jo_risalo' , 'Line No': 54},
  { 'Text Content': 'آﻫﻲ ﻧﻪ ﺧﺎﻟﻲ ﮐﺎن', 'Category': 'shah_jo_risalo' , 'Line No': 55},
  { 'Text Content': 'آﻫﻦ وﻳﻮن ڏﻧﻴﻮن ﻣﻄﺎﺑﻖ اﭼﺎرن راﺋﺞ ﻋﺎم ﻣﻮﺟﻮده ﭘﮍﻫﮣﻴﻮن ﺟﻮن ﺑﻴﺘﻦ ﻣﺘﻦ', 'Category': 'shah_jo_risalo' , 'Line No': 56},
  { 'Text Content': 'آﻫﻲ وﺋﻲ ﻛﺌﻲ ﺗﺼﺤﻴﺢ ﺟﻲ', 'Category': 'shah_jo_risalo', 'Line No': 57 },
  { 'Text Content': 'ﺗﻲ ﭘﮍﻫﮣﻴﻦ ﺟﻲ ﻧﺴﺨﻦ ﻗﻠﻤﻲ ﺗﻮڙي ﮀﺎﭘﻦ ﻣﺨﺘﻠﻒ ﺟﻲ رﺳﺎﻟﻲ ﻣﺘﻦ ﻫﻲ ء ﺟﻴﺘﻮﮢﻴﻚ', 'Category': 'shah_jo_risalo', 'Line No': 58 },
  { 'Text Content': 'اﻧﻬﻲ ء آﻫﻦ وﻳﻮن ڏﻧﻴﻮن ﻛﻴﻦ ﭘﮍﻫﮣﻴﻮن ﺟﺪا ﺟﺪا ﺣﺎﺷﻴﻦ ﻫﻴﭟ ﻃﻮر رﺳﻤﻲ ﺑﻪ ﺗﻪ آﻫﻲ وﻳﻮ ﻛﻴﻮ ﻗﺎﺋﻢ ﺑﻌﺪ ﻏﻮر', 'Category': 'shah_jo_risalo', 'Line No': 59},
  { 'Text Content': 'ﻻ ء ﭘﮍﻫﻨﺪڙن ﺗﻪ ا ﻣﻴﺪ ﺟﺎ آﻫﻲ وﺋﻲ ڏﻧﻲ ﭘﭩﻲ ﺟﻲ ﻟﻔﻈﻦ ڏﮐﻴﻦ آﺧﺮ ﺟﻲ ﻣﺘﻦ ﺧﺎﻃﺮ ﻓﺎﺋﺪي ﻋﺎم اﻟﺒﺘﻪ', 'Category': 'shah_jo_risalo', 'Line No': 60 },




  { 'Text Content': 'ئي فبلن آ ي ر هيبى ػجلال بة ث يئي ٿ چ ي', 'Category': 'Ayaz_shaikh', 'Line No': 1 },
  { 'Text Content': 'ر كو اػزجبهي كوم آ ي ؽويوذ ع فبلن آ ي ر ا ئي فلن آ ي ع فلن آ ي', 'Category': 'Ayaz_shaikh', 'Line No': 2 },
  { 'Text Content': 'ﺟـﻲ ڏﻫـﺎﻛﻲ ﻋﺒــﺪا ا داسﺣﺴــﻴﻦ ﻧﺴـﻠﻴﻦ ﻧـﺎﻟﻲ ﻛﺘـﺎب', 'Category': 'Ayaz_shaikh', 'Line No': 3 },
  { 'Text Content': 'ﻟﮑﻴـﻮ', 'Category': 'Ayaz_shaikh', 'Line No': 4 },
  { 'Text Content': 'واري ڏﻫﺎﻛﻲ وري ﻣـﺎﮢ ﻚ ﻟ ﮍﻫﻨـﺪ ڙ ﻧ ﺴ ـﻞ ﻧﺎﻟﻲ ﻛﺘـﺎب ﻟﮑـﻲ ﭘﻨﻬﻨﺠـﻲ', 'Category': 'Ayaz_shaikh', 'Line No': 5 },
  { 'Text Content': 'دور ﺟﻲ ﻋﻜﺎﺳﻲ ﻛـﺮڻ ﺟـﻲ ﻛﻮﺷـﺶ اﻣـﺪاد', 'Category': 'Ayaz_shaikh', 'Line No': 6 },
  { 'Text Content': 'ﻛﺌـﻲ ﺣ ﺴـﻴﻨﻲ ء وري واري', 'Category': 'Ayaz_shaikh', 'Line No': 7 },
  { 'Text Content': 'ڏﻫﺎﻛﻲ ﺋﻲ ﻟﮑﻴﻮ', 'Category': 'Ayaz_shaikh', 'Line No': 8 },
  { 'Text Content': 'اﻧـﮅي ﻣﺎ ء ﭴﮣـﻴـﻨـﺪي آﻫـﻲ اوﻧـﮅا ﺳـﻮﻧـﮅا ﭔـﺎر', 'Category': 'Ayaz_shaikh', 'Line No': 9 },
  { 'Text Content': 'اﻳﻨﺪڙ ﻧﺴﻞ ﺳ ﻤﻮرو ﻫﻮﻧﺪو ﮔﻮﻧﮕﺎ ﭔﻮڙا ﭔﺎر', 'Category': 'Ayaz_shaikh', 'Line No': 10 },
  { 'Text Content': 'ﻫــﺮ دور ﺟــﻲ ﻧﻮﺟــﻮاﻧﻦ ﮐــﻲ ا داس ﻟ ﮍﻫﻨــﺪ ڙ ﻛ ﮍﻫﻨــﺪڙ ﻛ ﮍﻫﻨــﺪڙ ﭔ ﺮﻧــﺪڙ', 'Category': 'Ayaz_shaikh', 'Line No': 11 },
  { 'Text Content': 'ﭘﮍﻫﻨﺪڙ ﻧﺴﻞ ﺟﺎ ﮘﻮﻻﺋﻮ آﻫﻴﻮن', 'Category': 'Ayaz_shaikh', 'Line No': 12 },
  { 'Text Content': 'ﻛﺘﺎﺑﻦ ﮐﻲ ﻛﺎﮘ ﺮ ﺗﺎن ﮐﮣــﻲ ﻛﻤــﭙﻴﻮ ﭨﺮ ﺟــﻲ', 'Category': 'Ayaz_shaikh', 'Line No': 13 },
  { 'Text Content': 'ﭘ ﮍﻫﻨﺪڙ ﻧ ﺴﻞ ﭘ ــﻦ ﻛﺎ ﺑﻪ ﺗﻨﻈﻴـﻢ ا ن', 'Category': 'Ayaz_shaikh', 'Line No': 14 },
  { 'Text Content': 'ﻧـﺎﻫﻲ ﺟـﻮ ﻛـﻮ ﺑـﻪ ﺻـﺪر ﻋ ﻬﺪﻳـﺪار ﻳـﺎ', 'Category': 'Ayaz_shaikh', 'Line No': 15 },
  { 'Text Content': 'ﻫﻮﻧﺪا ﺋــﻲ ﺳــﺎﮘﺌﻲ', 'Category': 'Ayaz_shaikh', 'Line No': 16 },
  { 'Text Content': 'ﭘﮍﻫﻨﺪڙ ﺑﻪ ﭤﻲ ﺳﮕﮭﻦ ﭔﻴﻦ', 'Category': 'Ayaz_shaikh', 'Line No': 17 },
  { 'Text Content': 'ﺑﻨﻴﺎدن ﺗﻲ ﭤﻴﻦ ﭘﺮ ﻣﻤﻜﻦ آﻫﻲ ﺗﻪ ﻛﻲ ﻛﻢ ا ﺟﺮﺗﻲ ﺑﻨﻴﺎدن ﺗﻲ ﺑﻪ اﻫــﮍي', 'Category': 'Ayaz_shaikh', 'Line No': 18 },
  { 'Text Content': 'ﺣﺎﻟﺖ ﭘ ـﻦ ﭘﺎڻ ﻫ ﻜ ﭕ ﺌﻲ ﺟــﻲ ﻣـﺪد ﻛ ــﺮڻ ﺟــﻲ ا ﺻــﻮل ﻫﻴــﭟ ڏي و ٺ ﻛﻨــﺪا', 'Category': 'Ayaz_shaikh', 'Line No': 19 },
  { 'Text Content': 'ﭤﻴﻨﺪو ﻛﻢ ﻛﺮڻ وارن ﻣﺎن ﺟﻴﻜﮇﻫﻦ ﻛﻮ ﭘﻴﺴﺎ ﻛﻤﺎﺋﻲ ﺳــﮕﮭﻲ ﭤــﻮ', 'Category': 'Ayaz_shaikh', 'Line No': 20 },
  { 'Text Content': 'دوران ﻛ ﻨﻬﻦ ﺑﻪ ر ﻛﺎوٽ ﮐﻲ ﻧﻪ', 'Category': 'Ayaz_shaikh', 'Line No': 21 },
  { 'Text Content': 'آﻫــــﻦ ﮔـــﻮرﻳــﻼ ﭴــﮡ ﺑـﻪ ﮔــﻴــﺖ', 'Category': 'Ayaz_shaikh', 'Line No': 22 },
  { 'Text Content': 'ﻧﺼﺎﺑﻲرﮘﻮ ﻛﺘﺎﺑﻦ ﭘﺎڻ ﮐﻲ ﻗﻴﺪ ﮀﮇڻﻛﺮ ي ﺳــﺎن ﺳــﻤﺎج', 'Category': 'Ayaz_shaikh', 'Line No': 23 },
  { 'Text Content': 'ادﺑــﻲ ﮔﮇوﮔــﮇ ﭔﻴــﻦﺗــﺎرﻳﺨﻲ ﺳــﺎن ﺳﺎﺋﻨﺴــﻲ اﻗﺘﺼــﺎدي ﺳــﻤﺎﺟﻲ ﺳﻴﺎﺳــﻲ', 'Category': 'Ayaz_shaikh', 'Line No': 24 },
  { 'Text Content': 'ﮐــﻲ ﮘــﻮﻟﮡ رﮘــﻮﺟــﻮاب ﻧــﻪ ﺣــ ﭘﻨﻬﻨﺠــﻮ ﻖ ﭘــﺮ ﮔﮭــﺮج اﮢــﭩﺮ ﻓــﺮض ', 'Category': 'Ayaz_shaikh', 'Line No': 25 },
  { 'Text Content': ' ﭘﻬﭽﺎﺋﮡ ﺗﺎﺋﻴﻦ ﻣﺎﮢﻬﻦ وڌ ﮐﺎن وڌ ﭘﮍﻫﮡ ﭘﺎڻ ﮐﻲ ﻛﺘﺎﺑﻦ ﺳﻤﺠﮭﻨﺪي', 'Category': 'Ayaz_shaikh', 'Line No': 26 },
  { 'Text Content': 'ﺗﺤﺮﻳــﻚ ﺳــﻬﻜﺎري ا ن ﺟــﻲ ﭰﻬﻼﺋــﮡ ﭘﮍﻫــﺎﺋﮡ ﭘﮍﻫﮡ ﺑﻪ ﺗﻮﻫﺎن', 'Category': 'Ayaz_shaikh', 'Line No': 27 },
  { 'Text Content': 'وﻳﻨﺪا اﭼﻲ ﻧﻈﺮ ﺿﺮور ﭘﻦ ﭘﻴﻼ ﺗﻮڙي ﺳﺎوا ﻧﻴﺮا ﺗﻮڙي ﮘﺎڙﻫﺎ', 'Category': 'Ayaz_shaikh' , 'Line No': 28},
  { 'Text Content': 'اﻳﺎز ــ ﻛﻴﻨﺮوﻛ ﭘﺎﺗﻢ ﻠﻬﻲ', 'Category': 'Ayaz_shaikh', 'Line No': 29 },
  { 'Text Content': 'ڇبپب   چل يوي به عي ربهيقي ه هؼي ري بيغ ڪوي', 'Category': 'Ayaz_shaikh', 'Line No': 30 },
  { 'Text Content': 'چل ع بػو كه ي كي ثيهگ عي ؽيضيذ بى ڌ عيڪ ثل ل', 'Category': 'Ayaz_shaikh', 'Line No': 31 },
  { 'Text Content': 'ا گو ڪ ا ڙ اكاه هبئن ڪي ڃي عيڪ چل عي ا ؼ ڪالم پيـبم', 'Category': 'Ayaz_shaikh', 'Line No': 32 },
  { 'Text Content': 'ڌي وبط عي اهروب عي هطبلؼي الء پڻ هليل صبثذ ٿي ل', 'Category': 'Ayaz_shaikh', 'Line No': 33 },
  { 'Text Content': 'هؾول بكم هاڻيپ ه اه هب ي ػلي اڪجو كهاىي آؿب كي وبڻ كويو ي', 'Category': 'Ayaz_shaikh', 'Line No': 34 },
  { 'Text Content': 'چل عي ڪالم عب اڳ ڻب هؾون بهػ هوؽ م ػضوبى ػلي ا بهي ػڪين', 'Category': 'Ayaz_shaikh', 'Line No': 35 },
  { 'Text Content': 'ع بى ڇڏي يب آ ي', 'Category': 'Ayaz_shaikh', 'Line No': 36 },
  { 'Text Content': ' هبهچ  ع ىيو رؼلين صوبكذ ها لي ى', 'Category': 'Ayaz_shaikh', 'Line No': 37 },
  { 'Text Content': 'هب ى ؽڪ هذ ڌ', 'Category': 'Ayaz_shaikh', 'Line No': 38 },
  { 'Text Content': 'هد عبء كم عي كم هيء هد ڪن عي', 'Category': 'Ayaz_shaikh', 'Line No': 39 },
  { 'Text Content': 'كم عب لند ؿن عي ا ڳبل فب ي', 'Category': 'Ayaz_shaikh', 'Line No': 40 },
  { 'Text Content': 'اثلي عي ڏائي و ب ري ائي', 'Category': 'Ayaz_shaikh', 'Line No': 41 },
  { 'Text Content': 'ا له وڪبه کي ڏيبى', 'Category': 'Ayaz_shaikh', 'Line No': 42 },
  { 'Text Content': 'فيبل ڪين ر ايزوي كو ذ آ ي كوا ذ ع ا يء', 'Category': 'Ayaz_shaikh', 'Line No': 43 },
  { 'Text Content': 'ڪالم ٿ ڪوڻ گنهي يب', 'Category': 'Ayaz_shaikh', 'Line No': 44 },
  { 'Text Content': 'ڪي ڪي عبيي', 'Category': 'Ayaz_shaikh', 'Line No': 45 },
  { 'Text Content': 'ػلن ي ڇب ي ر ػلن لي ڇب ي فيبل ڪين عي ك عي', 'Category': 'Ayaz_shaikh', 'Line No': 46 },
  { 'Text Content': 'ا طالؽي عي هؼ ي وغ آئي ر و ا ذ عي ػون ربئيي ڪيي ڃي', 'Category': 'Ayaz_shaikh', 'Line No': 47 },
  { 'Text Content': 'وه ذ عي ڌي ڪالم عب ڇپيل و ها ـا ٿ ڪين هوىا ػلي هلي ثيگ', 'Category': 'Ayaz_shaikh' , 'Line No': 48},
  { 'Text Content': 'ؿالم جيء اه ق وبڻي كويو اه ق', 'Category': 'Ayaz_shaikh', 'Line No': 49 },
  { 'Text Content': 'لو كويو كهاىائيء ڪبهپ هيء ٽ عيڪ وه ذ ع', 'Category': 'Ayaz_shaikh', 'Line No': 50},
  { 'Text Content': 'چل وه ذ ع ىهب ڌي بػويء ع ڪ ا ڙ اهروبئي ك ه', 'Category': 'Ayaz_shaikh', 'Line No': 51 },
  { 'Text Content': 'چئ ى ليڪي وؼ و بػو ڪيي چئي گ ى', 'Category': 'Ayaz_shaikh', 'Line No': 52 },
  { 'Text Content': 'ٿيل آ ي كي اى آ ڪبها هاى به ه جو به و ه كبه ي ڪالم آ ي', 'Category': 'Ayaz_shaikh', 'Line No': 53 },
  { 'Text Content': 'ػضوبى ػلي ا بهي', 'Category': 'Ayaz_shaikh', 'Line No': 54 },






  { 'Text Content': 'ﭘﮭﺎﻛﻮ', 'Category': 'Altaf_shaikh', 'Line No': 1 },
  { 'Text Content': 'ﻣﺮن ﻧﻪ ﺑﮏ ﭠﻮﮘﻲ اﺗﻲ ﮬﺠﻦ ﻟﻮﭜﻲ ﺟﺘﻲ', 'Category': 'Altaf_shaikh', 'Line No': 2 },
  { 'Text Content': 'ﻫﺠﻦ ﻣﺎﮢﻬﻮ ﻻﻟﭽﻲ ﺟﺘﻲ ﭤﺎ ﺳﮕﻬﻦ ﮔﺬاري ﺧﻮش ﺋﻲ اﺗﻲ ﻣﺎﮢﻬﻮ ﭠﮗ', 'Category': 'Altaf_shaikh', 'Line No': 3 },
  { 'Text Content': 'ﭘﺎﺋﺠﻲ ﻣﺎن ڍﻳﺮ وڏي ﺗﻪ ﭘﺎﺋﺠﻲ ڌوڙ', 'Category': 'Altaf_shaikh', 'Line No': 4 },
  { 'Text Content': 'ﺟﻴﻜﻮ ﻃﻮر ﭨﻮכ ﮐﻲ ان وﭸﺎﺋﻲ ﻧﺎﻣﻮس ﻧﻨﮓ ﭘﻨﻬﻨﺠﻮ ﻛﺮي ﻛﻢ اﺧﻼﻗﻲ ﻏﻴﺮ ﻛﻮ ﻻ ء ﻓﺎﺋﺪي ﻣﻌﻤﻮﻟﻲ اﺋﻴﻦ ﭼﻴﻮ', 'Category': 'Altaf_shaikh', 'Line No': 5 },
  { 'Text Content': 'ﭤﻮ وﭸﻲ', 'Category': 'Altaf_shaikh', 'Line No': 6 },
  { 'Text Content': 'ﮔﮇﻫﻪ ڏﻧﭝﺠﻲ ﮐﻲ ﺳﺎﭨﻲ ء ﭤﺌﻲ ﺳﻮر', 'Category': 'Altaf_shaikh', 'Line No': 7 },
  { 'Text Content': 'ﻛﺘﺎﺑﻦ ﮐﻲ ﻛــﺮڻ ڊ ﺟﻴ ﭩـﺎﺋ ﻴﺰ ﮐـﺎن ﭘـﻮ ﭔﻴـﻮ اﻫــﻢ ﻣﺮﺣﻠــﻮ و رﻫــﺎﺋﮡ ', 'Category': 'Altaf_shaikh', 'Line No': 8 },
  { 'Text Content': 'ﭤﻴﻨﺪو ﻛﻢ ﻛﺮڻ وارن ﻣﺎن ﺟﻴﻜﮇﻫﻦ ﻛﻮ ﭘﻴﺴﺎ ﻛﻤﺎﺋﻲ ﺳــﮕﮭﻲ ﭤــﻮ', 'Category': 'Altaf_shaikh', 'Line No': 9 },
  { 'Text Content': 'ﺗﻪ ﭜﻠﻲ ﻛﻤﺎﺋﻲ ر ﮘﻮ ﭘ ـﻨ ـﻦ ﺳﺎن ا ن ﺟﻮ ﻛﻮ ﻻﮘﺎﭘﺑﻪ ﻮ ﻧﻪ', 'Category': 'Altaf_shaikh', 'Line No': 10 },
  { 'Text Content': 'ﺑﻴﻬــﺎرﻳﻮ ﻣﻘﺎﺑــﻞ ﻣــﺪ ﺟــﻲ ﺑــﺎرود ﮔﻮﻟﻴﻦ ﺑ ﻤﻦ ﮐﻲ ﺳﭝﻨﻲ اﻧﻬﻦ ڏﻳﻨﺪي ﺗ ﺸﺒﻴﻬﻪ', 'Category': 'Altaf_shaikh', 'Line No': 11 },
  { 'Text Content': 'ﭤـﺎ ﮀ ـﭙﻦ آڙ ﺟـﻲ ﭔـﻮﻟﻲ ء ﻫــﻮ ﺟ ﮗ ﭤﻲ وڌي ﺟﺎڙ ﺟﺌﻦ ﺟﺌﻦ', 'Category': 'Altaf_shaikh', 'Line No': 12 },
  { 'Text Content': 'آ ﺳﺎﭤـﻲ ﺟـﻮ ﺑ ـﻢ ﺑﻪ ﺑﻴﺖ ﻫـﻲ آ ﻧﻪ ﻓ ـﺮ ق ﭔـﻨـﻬﻲ ﻻ ء ﻣـﻮن', 'Category': 'Altaf_shaikh', 'Line No': 13 },
  { 'Text Content': 'ﻧﺼﺎﺑﻲرﮘﻮ ﻛﺘﺎﺑﻦ ﭘﺎڻ ﮐﻲ ﻗﻴﺪ ﮀﮇڻﻛﺮ ي ﺳــﺎن ﺳــﻤﺎج', 'Category': 'Altaf_shaikh', 'Line No': 14 },
  { 'Text Content': 'ﺣﻜﻮﻣــﺘﻲ ﺳــﻤﺎﺟﻲ ﻃــﻮر ﻧــﺘﻴﺠﻲ وﻳﻨﺪي ﮐﭵﻲ ﻧﻈﺮ ﺗﺎن ﺣﺎﻟﺘﻦ ﺳﻤﺎﺟﻲ', 'Category': 'Altaf_shaikh', 'Line No': 15 },
  { 'Text Content': 'ﭘﺎﻟﻴﺴﻴﻮن  رﻫﻨﺪﻳﻮن ﻫﭥﻦ ﺟﻲ ﻧﺎداﻧﻦ اﮢﭵﺎﮢﻦ', 'Category': 'Altaf_shaikh', 'Line No': 16 },
  { 'Text Content': 'ادﺑــﻲ ﮔﮇوﮔــﮇ ﭔﻴــﻦﺗــﺎرﻳﺨﻲ ﺳــﺎن ﺳﺎﺋﻨﺴــﻲ اﻗﺘﺼــﺎدي ﺳــﻤﺎﺟﻲ ﺳﻴﺎﺳــﻲ', 'Category': 'Altaf_shaikh', 'Line No': 17 },
  { 'Text Content': ' ﭘﻬﭽﺎﺋﮡ ﺗﺎﺋﻴﻦ ﻣﺎﮢﻬﻦ وڌ ﮐﺎن وڌ ﭘﮍﻫﮡ ﭘﺎڻ ﮐﻲ ﻛﺘﺎﺑﻦ ﺳﻤﺠﮭﻨﺪي', 'Category': 'Altaf_shaikh' , 'Line No': 18},
  { 'Text Content': 'ﺟﺎ ﻗﺴﻢ ﻫﺮ ڏ ﺳﻮ ﭘﺎﺳﻲ اوﺳﻲ ﭘﻨﻬﻨﺠﻲ ﺑ ﺲ ﭤﺎ ﺳﮕﮭﻮ ﭤﻲ ﺷﺎﻣﻞ', 'Category': 'Altaf_shaikh', 'Line No': 19 },
  { 'Text Content': 'ﭘـﮍﻻ ء ﺟﻮ ﭘ ــﻦ ﭘ ــﻦ ﺗﻨﻬﻨﺠﻲ ﻣﻦ ﻣﻨﻬﻨﺠﻲ ﭘﻬﺘﻮ', 'Category': 'Altaf_shaikh', 'Line No': 20 },
  { 'Text Content': 'اﻳﺎز ــ ﻛﻴﻨﺮوﻛ ﭘﺎﺗﻢ ﻠﻬﻲ', 'Category': 'Altaf_shaikh', 'Line No': 21 },
  { 'Text Content': 'ﭘﮭﺮﻳﻮن ﺣﺼﻮ  ', 'Category': 'Altaf_shaikh', 'Line No': 22 },
  { 'Text Content': 'اﮐﺮ ﺳﺎدا ﺳﮭﺘﻮ ﻋﺒﺪاﻟﻮﮬﺎب اﻧﺠﻨﻴﺌﺮ', 'Category': 'Altaf_shaikh', 'Line No': 23 },
  { 'Text Content': 'ﭘﺎران ﻣﺆﻟﻒ ورﺗﻞ ﺗﺎن ﻛﺘﺎب ﺳﺎن ﮔﮭﻮٽ آﮬﻲ رﭠﻲ ﺷﻴﺦ اﻟﻄﺎف', 'Category': 'Altaf_shaikh', 'Line No': 24 },
  { 'Text Content': 'ﺳﻨﮅي ﭼﻮﮢﻴﻮن ﭘﮭﺎﻛﺎ ﻣﺘﻦ ﺷﻴﺦ اﻟﻄﺎف', 'Category': 'Altaf_shaikh', 'Line No': 25 },
  { 'Text Content': 'ﻣﻮﻻ ﻫﺮﻓﻦ اﻟﻄﺎف ورﺗﻞ ﺗﺎن ﻛﺘﺎب ﺳﺎن ﮔﮭﻮٽ آﮬﻲ رﭠﻲ ﺷﻬﺒﺎز ﻗﻤﺮ', 'Category': 'Altaf_shaikh', 'Line No': 26 },
  { 'Text Content': 'ﻣﻬﺎڳ ﻟﻔﻆ ﭘﻴﺶ ورﺗﻞ ﺗﺎن ﻛﺘﺎب ﺳﺎن ﮔﮭﻮٽ آﮬﻲ رﭠﻲ اﺑﮍو آﻓﺘﺎب', 'Category': 'Altaf_shaikh', 'Line No': 27 },
  { 'Text Content': 'ﻧﺎﻟﻮ ﮐﻠﻨﺎﮢﻲﭘﮭﺮﻳﻮن ﻛﻮڙوﻣﻞ دﻳﻮان   ﭤﻮ اﭼﻲ ﺟﻮ', 'Category': 'Altaf_shaikh', 'Line No': 28 },
  { 'Text Content': 'ﺻﺎﺣﺐ ﭘﮭﺎﻛﺎان ﺳﻨﮅي ﺳﺎن ﻧﺎﻟﻲ ﺟﻲ', 'Category': 'Altaf_shaikh', 'Line No': 29 },
  { 'Text Content': 'ﭘﮭﺎﻛﻦ ﮀﭙﺎﺋﻲ ﮐﺎن ﻛﺘﺎﺑﻦ ﻣﮍﻧﻲ ءﺟﻲ ﭤﻮ وﭸﻲ ﻛﻴﻮ ﺗﺴﻠﻴﻢ آﮘﺎﭨﻮ ﮐﺎن ﻟﺤﺎظ ﺟﻲ', 'Category': 'Altaf_shaikh', 'Line No': 30 },
  { 'Text Content': 'ﻋﺼﺮ ﮬﻢ ﺳﻨﺪس', 'Category': 'Altaf_shaikh', 'Line No': 31 },
  { 'Text Content': 'ﭘﮭﺎﻛﺎ ﺳﻨﮅي ﺳﺆ ﭼﺎر ﺣﺼﻲ ﭘﮭﺮﺋﻴﻦ آﮬﻲ ورﮬﺎﻳﻞ ﺣﺼﻦ ﭔﻦ ﻛﺘﺎب ﺳﻨﺪن', 'Category': 'Altaf_shaikh', 'Line No': 32 },
  { 'Text Content': 'آڏواﮢﻲ ﻣﮭﺮﭼﻨﺪ ءﭜﻴﺮوﻣﻞ   ﭘﮡ  ورﺟﻴﺴﻦ اﺻﻄﻼﺣﻦ ڌاري ع', 'Category': 'Altaf_shaikh', 'Line No': 33 },
  { 'Text Content': 'ﭤﺎ ڏﺟﻦ ﮬﻴﭟ ﻧﺎﻻ ﺟﺎ', 'Category': 'Altaf_shaikh' , 'Line No': 34},







  { 'Text Content': 'ﭼﻨﺒﮍﻳﻮ اﭼﻲ ﻣﺎن ﭼﺎﮬﺖ', 'Category': 'ustaad_bukhari', 'Line No': 1 },
  { 'Text Content': 'ﮔﺬارش', 'Category': 'ustaad_bukhari', 'Line No': 2 },
  { 'Text Content': 'ﻛﻠ ﻛﮭا ڄ رﮬﻲﻤﻪ ﭤﻲ ﺗﺤﻘﻴﻖ ﺗﺠﺮﺑﺎ ﻧﻮان ﻧﺖ ﺗﻲ ﭙﻴﻮﭨﺮ', 'Category': 'ustaad_bukhari', 'Line No': 3 },
  { 'Text Content': 'اﻧﺪاز ﺮﭨﻤﭙﻴﻮﻛﺳﺎﺋﻨﺴﻲ ﺟﻲ ﭼﻮﻟﻲﭔ ﺑﻨﺠﻲ آﮬﻲﻲﻜ', 'Category': 'ustaad_bukhari', 'Line No': 4 },
  { 'Text Content': 'وﭸﻮن رﮬﺠﻲ ﭘﻮﺋﺘﻲ ﮀﻮ', 'Category': 'ustaad_bukhari', 'Line No': 5 },
  { 'Text Content': 'ﺳﺮﺑﺮا ه ﺟﺎ ادارن ﻛﻦ ﭤﺎ ﻧﻮﻛﺮي ﺻﺮف ﺻﺮف', 'Category': 'ustaad_bukhari', 'Line No': 6 },
  { 'Text Content': 'آﺳﺎﺋﺶ ﮬﺮ ﺟﻲ ﺳﺮﻛﺎ ر ﺻﺮف ﻛﺗﻪ ﺣﺎﺻﻞ ﺠﻲ ﭘﻨﻬﻨﺠﻲ', 'Category': 'ustaad_bukhari', 'Line No': 7 },
  { 'Text Content': 'ﻋﻠﻤﻲ ﺳﻤﺎج ﺳﻨﮅي ادﺑﻲ', 'Category': 'ustaad_bukhari', 'Line No': 8 },
  { 'Text Content': 'ﮀﺎ ﻣﻠﻴﻮ ﮐﻲ ادب ﺳﻨﮅي آ ﮬﻲﮬﻲ ﺳﻮﭼﻴﻮ ﻛﮇﮬﻦ اوﮬﺎن', 'Category': 'ustaad_bukhari', 'Line No': 9 },
  { 'Text Content': 'ﮀﺎ ﺑﻪ ﻣﻠﻲ اﺳﺎﻧﮑﻲ ﭘﺮ ﺳﮕ ﻲ ﻬﭤﻮ ﻛﻠﭽﺮ ﻛﺎﻣﻮرا ﮬﮭﮍي', 'Category': 'ustaad_bukhari', 'Line No': 10 },
  { 'Text Content': 'ا وﭸﻲ ﺑﺎﻗﻲ ﻛﻢ ﺟﻮ ﺳﺮﺑﺮ اﮬﻦ ﺟﻲ اﻧﮭﻦ ﻳﺎ', 'Category': 'ustaad_bukhari', 'Line No': 11 },
  { 'Text Content': 'وﻳﭽﺎرا ﺗﻪ ﻣﺎﮢﮭﻮن وارا ﻛﺮڻ ﻣﺤﺒﺖ ﻛﺎرڻ ﺧﺪا ﺳﺎن ﭔﻮﻟﺊ', 'Category': 'ustaad_bukhari', 'Line No': 12 },
  { 'Text Content': 'آﮬﻦ وﻳﺎ ﻣﺮي اﻛﺜﺮ', 'Category': 'ustaad_bukhari', 'Line No': 13 },
  { 'Text Content': 'ﺗﺎن ﻓﺎرم ﭘﻠﻴﭧ ﮬﻦ آﮬﻲ ﻛﻴﻮ ﻗﺎﺋﻢ ﺳﺎ ن ﻣﮍﺳﺊ ﭘﻨﻬﺠﻲ يادارﻳﻮ ﺟﻲ', 'Category': 'ustaad_bukhari', 'Line No': 14 },
  { 'Text Content': 'ﺷﺎﻋﺮي ﺟﺪﻳﺪ ﻋﻼوه اﻧﮑﺎن', 'Category': 'ustaad_bukhari', 'Line No': 15 },
  { 'Text Content': 'ﻓﺎﺻﻼ ﻣﺤﺒﺘﻮن ﻣﺎن ﺷﺎﻋﺮي ﺟﻲ ﺑﺨﺎري اﺳﺘﺎد ﮀﻪ', 'Category': 'ustaad_bukhari', 'Line No': 16 },
  { 'Text Content': 'ﺳﭩﺎ ﻛﺮي ﻛﻤﭙﻮر ﺟﻲ ﻟﻮڊﻧﮓ ڊاﺋﻮن ﻓﺎرم ﺟﻲ', 'Category': 'ustaad_bukhari', 'Line No': 17 },
  { 'Text Content': 'وﮢﻨﺪي ﺿﺮور ﻛﻮﺷﺶ ﮬﺊ اﺳﺎﻧﺠﻲ اوﮬﺎﻧﮑﻲ ﺗﻪ اﻣﻴﺪ', 'Category': 'ustaad_bukhari', 'Line No': 18 },
  { 'Text Content': 'آﮬ ﻛﺮﮢﻲ اﮬﺎ ﮔﺬارش وڌﻳﻚ ﻲﺳﻠﺴﻠﻲ ﻛﺮ ي ﺧﺎص', 'Category': 'ustaad_bukhari', 'Line No': 19 },
  { 'Text Content': 'ﮐﻲ دوﺳﺘﻦ رﮬﻨﺪڙ ﭔﺎﮬﺮ ﮐﺎن ﺳﻨﮅ ﻛﺮ ي ﻣﻬﺮﺑﺎﻧﻲ ﮬﻮ ﺗﻪ', 'Category': 'ustaad_bukhari', 'Line No': 20 },
  { 'Text Content': 'زﻧﺪ ﭘﻨﻬﻨﺠﻲ ﻻ ء ﺗﺮﻗﺊ ﻓﺮوغ ﺟﻲ ﭔﻮﻟﺊ هﺳﻨﮅي ﺟﻮ دﻟﺊ', 'Category': 'ustaad_bukhari', 'Line No': 21 },
  { 'Text Content': 'ﺟﻮ ﭔﻮﻟﻲ ﺳﻨﮅي ﭘﺮ آﮬﻦ وﻳﺎ ﭤﻲ اﭘﺎﮬﺞ ادارا ﺟﻮڙﻳﻞ ﻻء', 'Category': 'ustaad_bukhari', 'Line No': 22 },
  { 'Text Content': 'ﺗﻴﺴﺘﺎﺋﻴﻦ ﻛﻴﻮن ﻧﭥﺎ واﮬﺮ ﺗﺤﺖ ﺳﺴﭩﻢ اﻟﻴﻜﭩﺮاﻧﻚ', 'Category': 'ustaad_bukhari', 'Line No': 23 },
  { 'Text Content': 'ﮬﻦ ﺟﻲ ﭔﻮﻟﺊ ﻣﻮﺟﺐ ﺗﻘﺎﺿﺎﺋﻦ ﺟﻲ دور ﺟﺪﻳﺪ اﺳﺎن', 'Category': 'ustaad_bukhari', 'Line No': 24 },
  { 'Text Content': 'ﺳﺎن ﻧﻤﻮﻧﻲ ﮬﻬﮍي ﮐﻲ ﻣﻮاد آﻳﻞ دﻧﻴﺎ ﻛﻤﭙﻴﻮﭨﺮﺟﻲ', 'Category': 'ustaad_bukhari', 'Line No': 25 },
  { 'Text Content': 'ﻛﺘﺎب ﮬﻦ ورﮬﺎﺋﮡ ﮀﺎﭘﮡ ﻛﺮڻ اﺳﺘﻌﻤﺎل ﮐﻲ ﻣﻮاد ﺟﻲ', 'Category': 'ustaad_bukhari', 'Line No': 26 },
];

const wordsInDatabase = {
    sachal: df.filter(entry => entry['Category'] === 'sachal').map(entry => entry['Text Content'].toLowerCase()),
    shah_jo_risalo: df.filter(entry => entry['Category'] === 'shah_jo_risalo').map(entry => entry['Text Content'].toLowerCase()),
    Ayaz_shaikh: df.filter(entry => entry['Category'] === 'Ayaz_shaikh').map(entry => entry['Text Content'].toLowerCase()),
    Altaf_shaikh: df.filter(entry => entry['Category'] === 'Altaf_shaikh').map(entry => entry['Text Content'].toLowerCase()),
    ustaad_bukhari: df.filter(entry => entry['Category'] === 'ustaad_bukhari').map(entry => entry['Text Content'].toLowerCase())
};
function checkSpelling() {
    var inputData = document.getElementById('inputData').value;
  
    // Display the category and line number
    const category = getCategory(inputData);
    const lineNumbers = getLineNumbers(inputData);
    document.getElementById('Category').innerHTML = 'Category: ' + category;
    document.getElementById('LineNo').innerHTML = 'Line No: ' + lineNumbers;
  
    const corrections = checkAgainstDatabase(inputData);
  
    if (corrections.includes('<span class="suggestion">')) {
      document.getElementById('result').innerHTML = 'Incorrect Text: ' + corrections;
    } else {
      document.getElementById('result').innerHTML = 'Correct Text: ' + inputData;
    }
  
    // Generate and display suggestions
    const suggestions = generateSuggestions(inputData);
    document.getElementById('Suggestion_Other_Words_SomeCharacterIS_same:').innerHTML = 'Suggestions: ' + suggestions.join(', ');
  }

function getLineNumbers(inputData) {
    const lowercaseInput = inputData.toLowerCase();
  
    for (const category in wordsInDatabase) {
      const matchingEntries = df.filter(entry =>
        entry['Category'] === category && lowercaseInput.includes(entry['Text Content'].toLowerCase())
      );
  
      if (matchingEntries.length > 0) {
        const lineNumbers = matchingEntries.map(entry => entry['Line No']);
        return lineNumbers.join(', '); // Return the joined line numbers
      }
    }
  
    return 'Unknown'; // Return "Unknown" if no matching entries found
  }
  
  function generateSuggestions(inputData) {
    const suggestions = [];
    for (const category in wordsInDatabase) {
      for (const word of wordsInDatabase[category]) {
        const distance = levenshtein(inputData, word);
        if (distance <= 2) { // Adjust the distance threshold as needed
          suggestions.push(word);
        }
      }
    }
    return suggestions;
  }
  
  // Helper function to calculate Levenshtein distance
  function levenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
  
    const matrix = [];
  
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
  
    for (let i = 1; i <= a.length; i++) {
      matrix[0][i] = i;
    }
  
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          const deletion = matrix[i - 1][j] + 1;
          const insertion = matrix[i][j - 1] + 1;
          const substitution = matrix[i - 1][j - 1] + 1;
          matrix[i][j] = Math.min(deletion, insertion, substitution);
        }
      }
    }
  
    return matrix[b.length][a.length];
  }


function checkAgainstDatabase(inputData) {
    const lowercaseInput = inputData.toLowerCase();

    if (!wordsInDatabase.sachal.some(word => lowercaseInput.includes(word)) &&
        !wordsInDatabase.shah_jo_risalo.some(word => lowercaseInput.includes(word)) &&
        !wordsInDatabase.Ayaz_shaikh.some(word => lowercaseInput.includes(word)) &&
        !wordsInDatabase.Altaf_shaikh.some(word => lowercaseInput.includes(word)) &&
        !wordsInDatabase.ustaad_bukhari.some(word => lowercaseInput.includes(word))) {
        return `<span class="suggestion">${inputData}</span>`;
    }

    return inputData;
}

function getCategory(inputData) {
    const lowercaseInput = inputData.toLowerCase();

    if (wordsInDatabase.sachal.some(word => lowercaseInput.includes(word))) {
        return 'sachal';
    } else if (wordsInDatabase.shah_jo_risalo.some(word => lowercaseInput.includes(word))) {
        return 'shah_jo_risalo';
    } else if (wordsInDatabase.Ayaz_shaikh.some(word => lowercaseInput.includes(word))) {
        return 'Ayaz_shaikh';
    } else if (wordsInDatabase.Altaf_shaikh.some(word => lowercaseInput.includes(word))) {
        return 'Altaf_shaikh';
    } else if (wordsInDatabase.ustaad_bukhari.some(word => lowercaseInput.includes(word))) {
        return 'ustaad_bukhari';
    }

    return 'Unknown';
}