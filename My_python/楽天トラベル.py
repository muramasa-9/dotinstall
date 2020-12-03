#!/usr/bin/env python
# coding: utf-8

# In[1]:


import requests
import pandas as pd


# In[2]:


REQUEST_URL = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426'
APP_ID = '1018551006520402329'


# In[14]:


params = {
    'format': 'json',
    'largeClassCode': 'japan',
    'middleClassCode': 'okinawa',
    'smallClassCode': 'nahashi',
    'applicationId': APP_ID
}


# In[15]:


res = requests.get(REQUEST_URL, params)


# In[16]:


result = res.json()


# In[17]:


res


# In[29]:


hotel_info = result['hotels'][0]['hotel'][0]['hotelBasicInfo']
hotel_info


# In[33]:


pd.DataFrame(hotel_info, index=[0])


# In[34]:


hotel_info = result['hotels'][0]['hotel'][0]['hotelBasicInfo']
pd.DataFrame(hotel_info, index=[0])


# In[38]:


df = pd.DataFrame()


# In[41]:


hotels = result['hotels']


# In[47]:


df = pd.DataFrame()
hotels = result['hotels']

for i, hotel in enumerate(hotels):
    hotel_info = hotel['hotel'][0]['hotelBasicInfo']
    _df = pd.DataFrame(hotel_info, index=[i])
    df = df.append(_df)


# In[49]:


df.columns


# In[58]:


df[['hotelName', 'hotelInformationUrl', 'hotelMinCharge', 'postalCode', 'address1', 'address2', 'telephoneNo', 'parkingInformation', 'nearestStation',  'reviewAverage']].to_csv('hotel.csv', index=False)


# In[ ]:




