using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateCategory(Category category);
        Task<IEnumerable<Category>> GetAllCategories();
        Task<Category?> GetCategoryById(Guid id);

        Task<Category?> UpdateAsync(Category category);
    }
}
