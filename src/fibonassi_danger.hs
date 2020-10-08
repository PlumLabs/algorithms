-- Super bad execution time :D
-- you can try it online here https://www.jdoodle.com/execute-haskell-online/
fib::Integer->Integer
fib 0 = 1
fib 1 = 1
fib n = fib(n-1) + fib(n-2)

main :: IO ()
main =  do
  putStr "Fibonassi 100 -> "
  print(fib(100))
