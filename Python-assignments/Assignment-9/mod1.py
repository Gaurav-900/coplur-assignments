def Kaprekar(num):
    digits = list(str(num))
    asce = int(''.join(sorted(digits)))
    desc = int(''.join(sorted(digits, reverse=True)))
    res = desc - asce

    print(f"{desc} - {asce} = {res}")

    if res == 6174:
        return f"{res} is a Kaprekar Constant even when tested with {num}"
    return Kaprekar(res)