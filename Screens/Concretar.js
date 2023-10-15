import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "react-native-paper";

export default function Registro() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
    });
  }, [navigation]);

  const goMiPerfil = () => {
    navigation.navigate("MiPerfil");
  };
  const goGaleria = () => {
    navigation.navigate("Galeria2");
  };
  const goMisPublicados = () => {
    navigation.navigate("MisPublicados");
  };
  const goMisOfertas = () => {
    navigation.navigate("MisOfertas");
  };
  const goDatosCambio = () => {
    navigation.navigate("DatosCambio");
  };

  const drawer = useRef(null);
  const [drawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.containerDrawer, styles.navigationContainer]}>
      <View>
        <Image
          source={require("../assets/LogoTeLoCambio.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.separatorLine} />
      <Drawer.Section>
        <TouchableOpacity style={styles.drawerItem} onPress={goMiPerfil}>
          <Text style={styles.drawerText}>Mi Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={goGaleria}>
          <Text style={styles.drawerText}>Galeria de Artículos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={goMisPublicados}>
          <Text style={styles.drawerText}>Mis Publicados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={goMisOfertas}>
          <Text style={styles.drawerText}>Mis Ofertas</Text>
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
  const objeto1 = {
    nombre: "Nombre del producto klo que ofrecí",
    descripcion: "Datos de la primera wea",
    imagen: require("../assets/yo.png"),
  };

  const objeto2 = {
    nombre: "Nombre del art klo que te ofrecieron",
    descripcion: "Datos de la segunda wea",
    imagen2: require("../assets/SubirProducto.png"),
  };

  return (
    <DrawerLayout
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text style={styles.bigText}>Objetos de Intercambio</Text>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Image source={objeto1.imagen} style={styles.imagen} />
            <View style={styles.detallesContainer}>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Nombre:</Text> {objeto1.nombre}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Descripción:</Text>{" "}
                {objeto1.descripcion}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image source={objeto2.imagen2} style={styles.imagen} />
            <View style={styles.detallesContainer}>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Nombre:</Text> {objeto2.nombre}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Descripción:</Text>{" "}
                {objeto2.descripcion}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonAceptar} onPress={goDatosCambio}>
          <Text style={styles.buttonText}>Aceptar Oferta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRechazar}>
          <Text style={styles.buttonText}>Rechazar Oferta</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  itemContainer: {
    width: "90%",
    alignItems: "center",
  },
  item: {
    width: "100%",
    backgroundColor: "#8AAD34",
    borderRadius: 7,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  boldText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  bigText: {
    fontSize: 24,
    paddingBottom: 60,
  },
  espacioContainer: {
    marginTop: 20,
  },
  buttonPublicadas: {
    marginTop: 15,
    backgroundColor: "black",
    borderRadius: 5,
    width: 200,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAceptar: {
    marginTop: 15,
    backgroundColor: "#8AAD34",
    borderRadius: 5,
    width: 200,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRechazar: {
    marginTop: 15,
    backgroundColor: "#cc0000",
    borderRadius: 5,
    width: 200,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  containerDrawer: {
    flex: 1,
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  drawerItem: {
    backgroundColor: "#8AAD34",
    margin: 10,
    borderRadius: 30,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
    padding: 12,
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 10,
  },
  logo: {
    width: 260,
    height: 47,
  },
  imagen: {
    width: 150,
    height: 150,
  },
  detallesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#8AAD34",
    borderRadius: 7,
    marginVertical: 10,
  },
});
