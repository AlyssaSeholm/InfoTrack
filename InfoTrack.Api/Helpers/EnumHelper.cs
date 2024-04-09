namespace InfoTrack.API.Helpers
{
    public static class EnumHelper
    {
        public static int GetEnumValue<TEnum>(string enumName, int defaultValue = 0) where TEnum : struct, Enum
        {
            if (Enum.TryParse(enumName, out TEnum result))
            {
                return Convert.ToInt32(result);
            }
            else
            {
                return defaultValue;
            }
        }
    }
}
