http://cinema-react-app-dev.s3-website-us-west-2.amazonaws.com

# When you have a aws cloudfront distribution whatever you push

to cloudfront it sits in a cache and if you push new data or changes
the changes will not be displayed because cloudfront will not know
that it is new it will display the previous data
to solve this what we need to do is invalidate what we have already in cache
