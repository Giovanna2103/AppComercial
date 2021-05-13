import * as React from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { styleFormat } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

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
    <View>
      <ScrollView horizontal={false}>
     {/* Começo  Área do cadastro de Usuario */}
        <View>
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
        <View>
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

          {/* <TextInput
          style={styleFormat.input}
          placeholder="sexo"
          value={sexo}
          keyboardType="default"
          onChangeText={(value) => setSexo(value)}
            />
            */}
        </View>
     {/* Fim da área do cadastro de Cliente */}

     {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

     {/* Começo  Área do cadastro de Endereço */}
        <View>
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
        <View>
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

        <TouchableOpacity style={styleFormat.btnCadastro}>
          <Text style={styleFormat.txtCadastro}> Cadastra</Text>
        </TouchableOpacity>

      </ScrollView>
      
    </View>
  );
}
