interface Props {
    children: React.ReactNode;
    className?: string;
  }

const Container = ({children, className}: Props) => {
  return (
    <div className={`w-[800px] max-w-screen-xl bg-blue-500 text-blue-700 mx-auto py-10 px-4 lg:px-0 ${className}`}>
         {children}
    </div>
  )
}

export default Container