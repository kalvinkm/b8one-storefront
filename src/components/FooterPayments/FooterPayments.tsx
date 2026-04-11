import './FooterPayments.css'

type PaymentMethod = {
  name: string
  icon: string
}

type Props = {
  methods: PaymentMethod[]
}

export function FooterPayments({ methods }: Props) {
  return (
    <div className="footer__payments">
      {methods.map((method) => (
        <img
          key={method.name}
          src={method.icon}
          alt={method.name}
          className="footer__payment-icon"
        />
      ))}
    </div>
  )
}
