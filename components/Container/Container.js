export default function Container({bgColor, children}) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bgColor || 'white',
    }}>
    {children}
    </div>
  )
}
