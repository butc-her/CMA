import './globals.css'

export const metadata = {
    title: 'ChainMaster Academy',
    description: 'Blockchain for Everyone',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                 <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout