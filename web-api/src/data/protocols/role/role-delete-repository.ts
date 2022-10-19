export interface RoleDeleteRepository {
    delete(id: number): Promise<void>;
}