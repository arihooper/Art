import "@Style/glob.css"

export const metadata = {
    Title : "My Art Gallery",
    Description : "Colllection of Arts That can Be Shared"
}
const layout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout