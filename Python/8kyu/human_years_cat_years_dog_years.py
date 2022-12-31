# https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
# DESCRIPTION:
# Kata Task
# I have a cat and a dog.
# I got them at the same time as kitten/puppy. That was 
# humanYears years ago.
# Return their respective ages now as 
# [humanYears,catYears,dogYears]
# NOTES:
#     humanYears >= 1
#     humanYears are whole numbers only
# Cat Years
#     15 cat years for first year
#     +9 cat years for second year
#     +4 cat years for each year after that
# Dog Years
#     15 dog years for first year
#     +9 dog years for second year
#     +5 dog years for each year after that
# References
#     http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
#     http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
# If you liked this Kata there is another related one here: 
# https://www.codewars.com/kata/cat-years-dog-years-2

def human_years_cat_years_dog_years(human_years):
    cat = 0 
    dog = 0 
    counter = 1 
    for i in range(human_years): 
        if counter == 1: 
            cat += 15
            dog += 15 
            counter += 1
            continue
        if counter == 2: 
            cat += 9 
            dog += 9 
            counter += 1
            continue
        cat += 4 
        dog += 5
        
    return [human_years, cat, dog]
