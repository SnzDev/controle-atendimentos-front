
import Cookie from 'js-cookie';
import { useRouter } from 'next/router'

export default function Logout() {
    Cookie.remove('token');
    Cookie.remove('nome');
    Cookie.remove('cargo');
    const router = useRouter();
    router.replace('/');

    return (<></>);

}