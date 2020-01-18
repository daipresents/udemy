from flickrapi import FlickrAPI
from urllib.request import urlretrieve
from pprint import pprint
import os, time, sys

# API information
flickr_key = os.environ['FLICKR_KEY']
flickr_secret = os.environ['FLICKR_SECRET']

wait_time = 1

animal_name = sys.argv[1]
save_dir = "./" + animal_name

flickr_client = FlickrAPI(flickr_key, flickr_secret, format='parsed-json')
results = flickr_client.photos.search(
  text = animal_name + ' japan',
  per_page = 400,
  media = 'photos',
  sort = 'relevance',
  safe_search = 1,
  extras = 'url_q, licence'
)

photos = results['photos']
pprint(photos)

for i, photo in enumerate(photos['photo']):
  url_q = photo['url_q']
  file_path = save_dir + '/' + photo['id'] + '.jpg'
  if os.path.exists(file_path): continue
  urlretrieve(url_q, file_path)
  time.sleep(wait_time)
