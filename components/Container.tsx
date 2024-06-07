interface Props {
    children: React.ReactNode;
    className?: string;
  }

const Container = ({children, className}: Props) => {
  return (
    <div className={`w-[900px] max-w-screen-xl mx-auto py-5 px-4 lg:px-0 ${className}`}>
         {children}
    </div>
  )
}

export default Container