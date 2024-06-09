// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript

export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let totalBouncing: number = 1;
  let currentHeight: number = bounce * h;

  while (window < currentHeight) {
    totalBouncing += 2;
    currentHeight *= bounce;
  }
  return totalBouncing;
}

/*
Diketahui: h = 3, bounce = 0.66, window = 1.5
Pantulan pertama:
bounce x h = 0.66 x 3 = 1.98 (+2 if > window)
Setiap kali bola memantul, maka:
bounce x tinggi pantulan sebelumnya = 0.66 x 1.98 = 1.3 (+2 if > window else break)

Q: Berapa kali sang ibu melihat bola melewati jendela di depannya (termasuk saat jatuh dan memantul)?

Three conditions must be met for a valid experiment:
  Float parameter "h" in meters must be greater than 0
  Float parameter "bounce" must be greater than 0 and less than 1
  Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
*/