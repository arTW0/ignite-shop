import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Arthur Neves</strong>, sua <strong>Camiseta Beyound the Limits</strong> já está a acaminho do seu endereço.
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}