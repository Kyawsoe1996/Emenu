import os
from django.utils.deconstruct import deconstructible

@deconstructible
class CategoryImageGenerator(object):
    
    def __init__(self):
        pass

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        path = f'category/{instance.business_id.name}/images/'
        name = f'{instance.name}.{ext}'
        return os.path.join(path, name)



@deconstructible
class ItemImageGenerator(object):
    
    def __init__(self):
        pass

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        path = f'item/{instance.category_id.business_id.name}/images/'
        name = f'{instance.name}.{ext}'
        return os.path.join(path, name)

@deconstructible
class BusinessImageGenerator(object):
    
    def __init__(self):
        pass

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        path = f'business/{instance.name}/images/'
        name = f'{instance.name}.{ext}'
        return os.path.join(path, name)








