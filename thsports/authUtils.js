import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

// Salvar usuário no AsyncStorage
export const cadastrarUsuario = async (nome, senha) => {
  const usuariosJSON = await AsyncStorage.getItem('usuarios');
  const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

 if (usuario) {
  await AsyncStorage.setItem('userRole', 'admin');
  return { success: true, message: 'Login bem-sucedido' };
}


  const senhaCriptografada = CryptoJS.SHA256(senha).toString();
  usuarios.push({ nome, senha: senhaCriptografada });

  await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
  return { success: true, message: 'Usuário cadastrado' };
};

// Verificar login
export const logarUsuario = async (nome, senha) => {
  const usuariosJSON = await AsyncStorage.getItem('usuarios');
  const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

  const senhaCriptografada = CryptoJS.SHA256(senha).toString();
  const usuario = usuarios.find(
    u => u.nome === nome && u.senha === senhaCriptografada
  );

  if (usuario) {
    return { success: true, message: 'Login bem-sucedido' };
  } else {
    return { success: false, message: 'Nome ou senha inválidos' };
  }
};
