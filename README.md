# csv2ndjson

> Convert a CSV file to Elasticsearch Bulk or NDJSON format

## Install

```
$ npm install csv2ndjson
```

## Usage:
todo

## Examples:

index: 'employees'
type: 'people'

data.csv:

| FirstName | LastName | Age | DOB        | Organization  | 
|-----------|----------|-----|------------|---------------| 
| Willard   | Smith    | 49  | 9/25/1968  | Salesforce    | 
| Dwayne    | Johnson  | 45  | 5/2/1972   | Elasticsearch | 
| Jim       | Carrey   | 56  | 1/17/1962  | Blizzard      | 
| Thomas    | Hanks    | 61  | 7/9/1956   | Dropbox       | 
| William   | Pitt     | 54  | 12/18/1963 | Uber          | 
| Edward    | Murphy   | 57  | 4/3/1961   | Adobe         | 


Elastic Bulk:
```
{ "index" : { "_index" : "employees", "_type" : "people" } }
{"FirstName":"Willard","LastName":"Smith","Age":"49","DOB":"9/25/1968","Organization":"Salesforce"}
{ "index" : { "_index" : "employees", "_type" : "people" } }
{"FirstName":"Dwayne","LastName":"Johnson","Age":"45","DOB":"5/2/1972","Organization":"Elasticsearch"}
{ "index" : { "_index" : "employees", "_type" : "people" } }
{"FirstName":"Jim","LastName":"Carrey","Age":"56","DOB":"1/17/1962","Organization":"Blizzard"}
{ "index" : { "_index" : "employees", "_type" : "people" } }
{"FirstName":"Thomas","LastName":"Hanks","Age":"61","DOB":"7/9/1956","Organization":"Dropbox"}
{ "index" : { "_index" : "employees", "_type" : "people" } }
{"FirstName":"William","LastName":"Pitt","Age":"54","DOB":"12/18/1963","Organization":"Uber"}
{ "index" : { "_index" : "employees", "_type" : "people" } }
{"FirstName":"Edward","LastName":"Murphy","Age":"57","DOB":"4/3/1961","Organization":"Adobe"}

```

NDJSON:
```
{"FirstName":"Willard","LastName":"Smith","Age":"49","DOB":"9/25/1968","Organization":"Salesforce"}
{"FirstName":"Dwayne","LastName":"Johnson","Age":"45","DOB":"5/2/1972","Organization":"Elasticsearch"}
{"FirstName":"Jim","LastName":"Carrey","Age":"56","DOB":"1/17/1962","Organization":"Blizzard"}
{"FirstName":"Thomas","LastName":"Hanks","Age":"61","DOB":"7/9/1956","Organization":"Dropbox"}
{"FirstName":"William","LastName":"Pitt","Age":"54","DOB":"12/18/1963","Organization":"Uber"}
{"FirstName":"Edward","LastName":"Murphy","Age":"57","DOB":"4/3/1961","Organization":"Adobe"}
```

## Todo:

- Add header support
- Testing
- Add usage