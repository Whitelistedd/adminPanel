import { Box } from '@mui/material'

interface ProgressCircle {
  progress?: number | string
  size?: number | string
  className?: string
}

export const ProgressCircle: React.FC<ProgressCircle> = ({
  progress = 0.75,
  size,
  className,
}) => {
  const angle = (Number(progress) / 100) * 360

  return (
    <Box
      className={className}
      sx={{
        background: `radial-gradient(#1F2A40 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #6870fa ${angle}deg 360deg),
            #4cceac`,
        borderRadius: '50%',
        width: size && `${size}px`,
        height: size && `${size}px`,
      }}
    />
  )
}
