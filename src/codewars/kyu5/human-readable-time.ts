// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript

export const humanReadable = (seconds: number): string => {
  const HH = Math.floor(seconds / 3600);
  const MM = Math.floor((seconds % 3600) / 60);  
  const SS = seconds % 60;

  const HHString = String(HH).padStart(2, '0');
  const MMString = String(MM).padStart(2, '0');
  const SSString = String(SS).padStart(2, '0');

  return `${HHString}:${MMString}:${SSString}`;
}

/*
HH:MM:SS

HH -> 00-99
MM -> 00-59
SS -> 00-59

seconds = 86399 -> 23:59:59
1 jam 3600 detik
1 jam 60 menit
1 menit 60 detik

HH = seconds / 3600
MM = seconds % 3600 -> / 60 
SS = seconds % 60
*/