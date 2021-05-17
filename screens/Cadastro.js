import * as React from "react";
import { View, Text, TextInput, Picker, Alert, ToastAndroid } from "react-native";
import { styleFormat } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { ipserver} from "../config/settings"

let us = ""; // USUARIO
let sh = ""; // SENHA

let nc = ""; // nome completo
let cf = ""; // CPF
let sx = ""; // sexo
let iu = ""; // id usuario
let ic = ""; // id contato
let ie = ""; // id endereço

let lg = ""; // logradouro
let nr = ""; // numero
let cp = ""; // complemento
let br = ""; // bairro
let ce = ""; // cep

let tl = ""; // telefone
let em = ""; // email

export default function Cadastro() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const [nomecliente, setNomeCliente] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [sexo, setSexo] = React.useState("");

  const [logradouro, setLogradouro] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [complemento, setComplemento] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cep, setCep] = React.useState("");

  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View style={styleFormat.container}>
      <ScrollView horizontal={false}>
        {/* Começo  Área do cadastro de Usuario */}

        <View style={styleFormat.cxInput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Usuário"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Senha"
            value={senha}
            keyboardType="default"
            secureTextEntry
            onChangeText={(value) => setSenha(value)}
          />
        </View>

        {/* Fim da área do cadastro de Usuario */}

        {/* ----------------------------------------------------------------------------------------------------------------------------- */}

        {/* Começo  Área do cadastro de Cliente */}

        <View style={styleFormat.cxInput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Cliente"
            value={nomecliente}
            keyboardType="default"
            onChangeText={(value) => setNomeCliente(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="CPF"
            value={cpf}
            keyboardType="number-pad"
            onChangeText={(value) => setCPF(value)}
          />

          <Picker
            mode="dropdown"
            selectedValue={sexo}
            onValueChange={setSexo}
            style={styleFormat.input}
          >
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
            <Picker.Item label="Outro" value="O" />
          </Picker>
        </View>

        {/* Fim da área do cadastro de Cliente */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* Começo  Área do cadastro de Endereço */}

        <View style={styleFormat.cxInput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Logradouro"
            value={logradouro}
            keyboardType="default"
            onChangeText={(value) => setLogradouro(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Número"
            value={numero}
            keyboardType="default"
            onChangeText={(value) => setNumero(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Complemento"
            value={complemento}
            keyboardType="default"
            onChangeText={(value) => setComplemento(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Bairro"
            value={bairro}
            keyboardType="default"
            onChangeText={(value) => setBairro(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="CEP"
            value={cep}
            keyboardType="number-pad"
            onChangeText={(value) => setCep(value)}
          />
        </View>

        {/* Fim da área do cadastro de Endereço */}

        {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Começo Área do cadastro de Contato */}

        <View style={styleFormat.cxInput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Telefone"
            value={telefone}
            keyboardType="number-pad"
            onChangeText={(value) => setTelefone(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
        </View>

        {/* Fim da área do cadastro de Contato */}

        <TouchableOpacity
          style={styleFormat.btnCadastro}
          onPress={() => {
            us = usuario;
            sh = senha;
            nc = nomecliente;
            cf = cpf;
            sx = sexo;
            lg = logradouro;
            nr = numero;
            cp = complemento;
            br = bairro;
            ce = cep;
            tl = telefone;
            em = email;

            efetuarCadastro();
            ToastAndroid.showWithGravity("Aguarde... Efetuando o cadastro", ToastAndroid.SHORT, ToastAndroid.CENTER);
          }}
        >
          <Text style={styleFormat.txtCadastro}> Cadastrar </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function efetuarCadastro() {
  let idusuario = "";
  let idcontato = "";
  let idendereco = "";

  fetch(`${ipserver}/usuario/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nomeusuario: us,
      senha: sh,
    }),
  })
    .then((response) => response.json())
    .then((rs) => idusuario = rs.output.insertId)
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));
    

  // --------------------------------------------------------------------------------------------------------------------------------------


  fetch(`${ipserver}/contato/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      telefone: tl,
      email: em,
    }),
  })
    .then((response) => response.json())
    .then((rs) => idcontato = rs.output.insertId)
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));


  // --------------------------------------------------------------------------------------------------------------------------------------


  fetch(`${ipserver}/endereco/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      logradouro: lg,
      numero: nr,
      complemento: cp,
      bairro: br,
      cep: ce,
    }),
  })
    .then((response) => response.json())
    .then((rs) => idendereco = rs.output.insertId)
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));


  // --------------------------------------------------------------------------------------------------------------------------------------
  
  


    perai (2000).then(() => {

      fetch(`${ipserver}/cliente/cadastro`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nomecliente:nc,
          cpf:cf,
          sexo:sx,
          idusuario:idusuario,
          idcontato:idcontato,
          idendereco:idendereco
        }),
      })
        .then((response) => response.json())
        .then((rs) => {
          console.log(rs);
          Alert.alert("Cadastro", "Cliente Cadastrado")
        }
          )
        .catch((error) => Alert.alert("Erro", `Erro ao tentar cadastrar -> ${error}`));

    })




}

const perai = (tempo) => {
  return new Promise((resolver) => {
    setTimeout(resolver, tempo)
  })
}
