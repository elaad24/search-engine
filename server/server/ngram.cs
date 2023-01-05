using System.Runtime.CompilerServices;

namespace server
{
    public class Helpers
    {
        public List<String> Ngram(string input)
        {
            var ans = new List<String>();
            if (input.Length >= 2)
            {
                ans = spliter(input);
            }
            else
            {
                ans.Add(input);
            }


            return ans;
        }

        private List<string> spliter(string input)
        {
            List<String> ans = new List<String>();
            int n;
            for (n = 1; n <= input.Length; n++)
            {
                int postition;
                for (postition = 0; postition < input.Length; postition++)
                {
                    if (postition + n < input.Length+1)
                    {

                    ans.Add(input.Substring(postition, n));
                    }
                 

                }

            }
        
            return ans;

        }

        
    }
   
}
