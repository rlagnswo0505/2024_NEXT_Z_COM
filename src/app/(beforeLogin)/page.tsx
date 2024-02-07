import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import zLogo from '../../../public/zlogo.png';

export default function Home() {
  return (
    <div>
      <div>
        <Image src={zLogo} alt="logo" />
      </div>
      <div>
        <h1></h1>
        <h2></h2>
        <Link href="/i/flow/signup">계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
}
