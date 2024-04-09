
namespace InfoTrack.Application.Helpers
{
    public static class EnumHelper
    {
        //public static int GetEnumValue<TEnum>(string enumName, int defaultValue = 0) where TEnum : struct, Enum
        //{
        //    if (Enum.TryParse(enumName, out TEnum result))
        //    {
        //        return Convert.ToInt32(result);
        //    }
        //    else
        //    {
        //        return defaultValue;
        //    }
        //}
        public static TEnum ConvertToEnum<TEnum>(string enumString, TEnum defaultValue = default) where TEnum : struct, Enum
        {
            if (Enum.TryParse(enumString, out TEnum result))
            {
                return result;
            }
            else
            {
                LogError($"Invalid enum string: {enumString}");
                return defaultValue;
            }
        }

        public static int GetEnumValue<TEnum>(TEnum enumValue, int defaultValue = 0) where TEnum : struct, Enum
        {
            if (Enum.IsDefined(typeof(TEnum), enumValue))
            {
                return Convert.ToInt32(enumValue);
            }
            else
            {
                LogError($"Invalid enum value: {enumValue}");
                return defaultValue;
            }
        }

        public static int GetEnumValue<TEnum>(int enumValue, int defaultValue = 0) where TEnum : struct, Enum
        {
            if (Enum.IsDefined(typeof(TEnum), enumValue))
            {
                return enumValue;
            }
            else
            {
                LogError($"Invalid enum value: {enumValue}");
                return defaultValue;
            }
        }

        public static int GetEnumValue<TEnum>(string enumName, int defaultValue = 0) where TEnum : struct, Enum
        {
            if (Enum.TryParse(enumName, out TEnum result))
            {
                return Convert.ToInt32(result);
            }
            else
            {
                LogError($"Invalid enum name: {enumName}");
                return defaultValue;
            }
        }

        public static TEnum GetFirstEnumValue<TEnum>() where TEnum : struct, Enum
        {
            return Enum.GetValues(typeof(TEnum)).Cast<TEnum>().FirstOrDefault();
        }

        public static string GetEnumName<TEnum>(TEnum enumValue) where TEnum : struct, Enum
        {
            return Enum.GetName(typeof(TEnum), enumValue) ?? "";
        }

        private static void LogError(string message)
        {
            // Example: Logging to console
            Console.WriteLine($"Error: {message}");
        }
    }
}
