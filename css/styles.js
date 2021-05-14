import { StyleSheet } from "react-native";

export const styleFormat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "65%",
    height: "75%",
    marginRight: "auto",
    marginLeft: "auto",
    resizeMode: "contain",
  },

  btnApp: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    backgroundColor: "#bdbdbd",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 7,
  },

  btn: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  input: {
    width:300,
    padding:5,
    marginBottom:10,
    borderBottomColor:'silver',
    borderBottomWidth:1

  },

  btnCadastro:{
    marginTop:50,
    marginBottom:50,
    backgroundColor:'#bdbdbd',
    padding:20,
    width:150,
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:30,

  },

  txtCadastro:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20

  },

  cxInput:{
    backgroundColor:'white',
    padding:10,
    marginTop:10,
    marginBottom:5,
    borderColor:'pink',
    borderWidth:2


  },





});
