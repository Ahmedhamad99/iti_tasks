count_i_in_string = input("Enter your string: ").strip()
arr_i = []
for count in range(len(count_i_in_string)):
    if count_i_in_string[count].lower() == 'i':
        arr_i.append(count)
print(arr_i)