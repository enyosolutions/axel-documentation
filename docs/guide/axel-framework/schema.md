# Axel schemas
===========



### Property definition
-
### Column definition
-
### Field definition
-
### Relations

Relations are the way you can link schemas between each other. They allow managing one to one, one to many, and many to many relationships between objects.

## Defining a relation

To define a relation you need to define property under schema field.
.
```javascript
userId: {
  type: 'integer',
  title: 'The owner of the car',
  relationKey: 'id',
  relationLabel: 'firstName',
  relationUrl: '/api/user'
}

```

Where
- `relationKey` is the primary key of the target model
- `relationLabel` is the field used to display the target label. Relation label can be either a field of the model, or templated string `\{\{ firstName }} \{\{ lastName.toUpperCase() }}`
- `relationUrl` is the api url base used to get the data

To simplify this linking you can define the relation simply with the identity of the targeted model.

```javascript
userId: {
  type: 'integer',
  title: 'The owner of the car',
  relation: 'user'
}

```

Doing so the frontend framework will get the details directly on the target model definition
- `relationKey` => `targetModel.primaryKeyField || defaultPrimaryKeyField`
- `relationLabel` => `targetModel.displayField`
- `relationUrl` => `targetModel.apiUrl`

The definition at the property level always take precedence.

## displaying a relation

