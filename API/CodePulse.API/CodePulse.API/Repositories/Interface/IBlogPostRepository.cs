using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface
{
    public interface IBlogPostRepository
    {
        Task<BlogPost> CreateAsync(BlogPost blogPost);
        Task<IEnumerable<BlogPost>> GetAllAsync();

        Task<BlogPost> GetBlogPostBIdAsync(Guid id);
        Task<BlogPost> GetBlogPostBUrlAsync(string url);

        Task<BlogPost> UpdateAsync(BlogPost blogPost);

        Task<BlogPost> DeleteAsync(Guid id);
    }
}
