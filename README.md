# react-native

Proyecto de rediseñar la app de trenes.

## api trenes

## app trenes
 


## apps con react native

Vamos a crear una app que liste items de una api.

Creamos nuestro proyecto `app`:

````
npx create-expo-app app
```

Para visualizar nuestro proyecto mientras lo desarrollamos usamos el servidor `expo`:

```
npx expo start
````

Luego de descargar la app `expo go` scaneamos el codigo QR que nos aparece en consola luego de haber iniciado el servidor. Ahora podemos ver en vivo el desarrollo de nuestra app.

Lo primero que vamos a hacer es cambiar en `app\App.js`:

```js
      <Text>Open up App.js to start working on your app!</Text>
```

Por:

```js
      <Text>mi primer app en react native!</Text>
```

Al guardar el archivo, podemos ver en nuetro celular los cambios!

### Componentes

- `Text` component is the only React Native component that can have textual children. It is similar to for example the `<strong>` and the `<h1>` elements.

- `View` component is the basic user interface building block similar to the `<div>` element.

- `TextInput` component is a text field component similar to the `<input>` element.

- `Pressable` component is for capturing different press events. It is similar to for example the `<button>` element.

Vamos a generar componentes en `app/src/components/Main.jsx`:


```js
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Mi Primer App!</Text>
    </View>
  );
};

export default Main;
```

Integramos estos componentes en `App.js`, reemplacemos todo por lo siguiente:

```js
import Main from './src/components/Main';

const App = () => {
  return <Main />;
};

export default App;
```

Si la applicacion en el celular no cambio, forza la recarga agitando el celular.

Vamos a generar una interfaz para mostrar resultados de una API, trabajemos con el siguiente ejemplo:

```json
...
,{
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  ...
  ```

Para esto vamos a usar un componente nativo `Flatlist`: [doc](https://reactnative.dev/docs/flatlist?language=javascript)

Este componente genera todo el codigo necessario, los props obligatorios son:

- `data`: Array con la data
- `renderItem`: Funcion, un ejemplo si iteramos sobre           diccionarios:
    ```
    renderItem={({item}) => <Item title={item.key} />}
    ```
- `ItemSeparatorComponent`: no es obligatorio, pero sirve para definir la separacion de items.


En nuestro caso necesitamos definir el componente para cada item usando en `renderItem`:

```js
const Item = ({title}) => (
    <View style={{
        backgroundColor: "cyan",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }} >
      <Text style={{fontSize: 25}}>{title}</Text>
    </View>
  );
```

Tambien tenemos definir un separador:

```js
const ItemSeparator = () => <View style={{
    height: 10,
  }} />;
```

Finalmente nuestra `Flatlist` queda:

```js
   <FlatList
    data={DATA}
    renderItem={({item}) => <Item title={item.fullName} />}
    ItemSeparatorComponent={ItemSeparator}
    />
```

Donde `DATA` es el array de elementos mostrado anteriormente, podemos usar cualquier array con diccionarios con la llave `fullName`, no importa su longitud.

### Estados 

Ahora agregmos un poco de complejidad, vamos a hacer que cada item sea seleccionable.


```js
    <FlatList
    data={DATA}
    renderItem={renderItemTouch}
    keyExtractor={item => item.id}
    extraData={selectedId}
    />
```

```js
// leemos los estados
const [selectedId, setSelectedId] = useState();

// redefinimos el renderItem
const renderItemTouch = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <ItemTouch
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

// redefinimos el Item
const ItemTouch = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>
        {item.fullName}
        </Text>
    </TouchableOpacity>
  );
  

```