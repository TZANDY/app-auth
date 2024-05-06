import { useRef,useState,useEffect} from 'react'
import { validatePwd, validateUser } from '../utils/utils';

export default function FormRegister() {
    const userRef = useRef();
    const errorRef = useRef();

    const [user,setUser] = useState('');
    const [validName,setValidName] = useState(false);
    const [userFocus,setUserFocus] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd,setValidPwd] = useState(false);
    const [pwdFocus,setPwdFocus] = useState(false);

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatchPwd,setValidMatchPwd] = useState(false);
    const [matchPwdFocus,setMatchPwdFocus] = useState(false);

    const [errMsg,setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    // para que el cursor se posicione en el input de usuario
    const useEffect(() => {
        userRef.current.focus();
    },[]);

    // para validar el usuario
    const useEffect(() => {
        const result = validateUser(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    },[user]);

    // para validar la contraseña
    const useEffect(() => {
        const result = validatePwd(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    },[pwd,matchPwd]);

    const useEffect(() => {
        setErrMsg('');
    },[user,pwd,matchPwd]);


  return (
    <section>
        <input />
    </section>
  )
}